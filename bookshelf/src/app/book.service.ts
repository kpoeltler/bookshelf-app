/*When creating Components we need to add the Component decorator but in Angular Service doesn't have one so we just use the @Component() So Services is a plain TypeScript class. So delete the @Component. Normally we would create a method to for gettin the list of books to consume the HTTP service and get the list from the server but for now just return a simple array. 
*/


  export class BookService {
    getBooks(){
      return [
        
          "Three Pound Enigma",
          "unknown",
          "non-fiction",
          true
        
      ];
    }
  }
