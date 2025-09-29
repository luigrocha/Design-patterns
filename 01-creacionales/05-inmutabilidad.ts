/**
 * ! Immutability with Copy
 * Although immutability is a good practice, it is not always possible.
 * In these cases, you can make a copy of the object and modify the copy.
 *
 * This is useful for keeping a history of states in interactive applications.
 */

// Import colors for the console
import { COLORS } from "../helpers/colors.ts";

// Class to represent the state of a code editor
class CodeEditorState {
  readonly content: string;
  readonly cursorPosition: number;
  readonly unSavedChanges: boolean;

  constructor(
    content: string,
    cursorPosition: number,
    unSavedChanges: boolean,
  ) {
    this.content = content;
    this.cursorPosition = cursorPosition;
    this.unSavedChanges = unSavedChanges;
  }
  copyWith(
    content?: string,
    cursorPosition?: number,
    unSavedChanges?: boolean,
  ): CodeEditorState {
    return new CodeEditorState(
      content !== undefined ? content : this.content,
      cursorPosition !== undefined ? cursorPosition : this.cursorPosition,
      unSavedChanges !== undefined ? unSavedChanges : this.unSavedChanges,
    );
  }

  // Method to display the current state in the console
  displayState(): void {
    console.log(`
            Content: ${this.content}\n
            Cursor Position: ${this.cursorPosition}\n
            Unsaved Changes: ${this.unSavedChanges}`);
  }
}

// Class to manage the history of code editor states
class CodeEditorHistory {
  private history: CodeEditorState[] = [];
  // Index of the current state in the history
  private currentStateIndex: number = -1;

  saveState(state: CodeEditorState): void {
    if (this.currentStateIndex < this.history.length - 1) {
  // Remove any states ahead of the current index (for undo/redo functionality)
      this.history = this.history.slice(0, this.currentStateIndex + 1);
    }
    this.history.push(state);
    this.currentStateIndex++;
  }

  undo(): CodeEditorState | null {
    if (this.currentStateIndex > 0) {
      this.currentStateIndex--;
      return this.history[this.currentStateIndex];
    }
    return null;
  }

  redo(): CodeEditorState | null {
    if (this.currentStateIndex < this.history.length - 1) {
      this.currentStateIndex++;
      return this.history[this.currentStateIndex];
    }
    return null;
  }
}

// Main function to test the immutability with copy pattern
function main(): void {
  const editorHistory = new CodeEditorHistory();
  let currentState = new CodeEditorState("Hola mundo", 2, false);
  editorHistory.saveState(currentState); // Save initial state

  console.log("%cInitial State:", COLORS.gray);
  currentState.displayState();
  // User types "Hola mundo Luis"
  currentState = currentState.copyWith("Hola mundo Luis", 5, true);
  editorHistory.saveState(currentState);
  console.log("%cAfter typing 'Hola mundo Luis':", COLORS.green);
  currentState.displayState();
  // User moves cursor to position 11
  console.log("%cAfter moving cursor to position 11:", COLORS.pink);
  currentState = currentState.copyWith(undefined, 11, undefined);
  editorHistory.saveState(currentState);
  currentState.displayState();
  

  // Undo last change
  console.log("%cAfter 'undo':", COLORS.yellow);
  currentState = editorHistory.undo() || currentState;
  currentState.displayState();

  // Redo last change
  console.log("%cAfter 'Redo':", COLORS.red);
  currentState = editorHistory.redo() || currentState;
  currentState.displayState();
}

main();
