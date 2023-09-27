package com.bbva.practitioner.book.manager;

import com.bbva.practitioner.book.manager.models.Book;
import com.bbva.practitioner.book.manager.services.BookRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabasePreloader {

    @Bean
    CommandLineRunner preloadDatabase(BookRepository books) {
        return (args) -> {
            Book aleph = new Book("El aleph", 2134 );
            books.save(aleph);
        };

    }
}