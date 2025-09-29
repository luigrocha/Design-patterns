/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */


// class Document que implementa el patrón Prototype
class Document {
    private content: string;
    public title: string;
    private author: string;

    constructor(content: string, title: string, author: string) {
        this.content = content;
        this.title = title;
        this.author = author;
    }

    // displayInfo muestra la información del documento
    public displayInfo() {
        console.log(`
            Title: ${this.title}, 
            Author: ${this.author}, 
            Content: ${this.content}
            `);
    }

    public clone(): Document {
        return new Document(this.content, this.title, this.author);
    }

    
}

//funtion main to test the prototype pattern
    function main(): void {
        const originalDoc = new Document("This is the content of the document.", "Document Title", "Luis Rocha");
        console.log("Original Document:");
        
        originalDoc.displayInfo();

        const clonedDoc = originalDoc.clone();
        clonedDoc.title = "New Document Title";
        console.log("Cloned Document:");
        clonedDoc.displayInfo();
}

main();