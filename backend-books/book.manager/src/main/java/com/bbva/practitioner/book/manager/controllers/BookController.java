package com.bbva.practitioner.book.manager.controllers;

import com.bbva.practitioner.book.manager.models.Book;
import com.bbva.practitioner.book.manager.services.BookRepository;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transaction;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/books")
public class BookController {

    private BookRepository repository;

    public BookController(BookRepository repository) {
        this.repository = repository;
    }
    /* /books?authorName="Pepe" */
    @GetMapping
    public List<Book> bookList(@RequestParam(name = "authorId", required = false) Integer authorId) {
       return repository.findAll();
    }

    @GetMapping("/{bookId}")
    public Book book(@PathVariable Integer bookId) {
        Optional<Book> bookOptional = this.repository.findById(bookId);
        if(bookOptional.isPresent()) {
            return bookOptional.get();
        } else {
            throw new RuntimeException("Not Found");
        }
    }

    @PostMapping
    public Book createBook(@RequestBody Book newBookData ) {
        Book newBook = this.repository.save(newBookData);
        return newBook;
    }
}
