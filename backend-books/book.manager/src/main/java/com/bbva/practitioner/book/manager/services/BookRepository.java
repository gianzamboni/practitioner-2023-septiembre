package com.bbva.practitioner.book.manager.services;

import com.bbva.practitioner.book.manager.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface BookRepository extends JpaRepository<Book, Integer> {
    /* Descomentar esto cuando la entidad Author este creada y configurada
    @Query(
            value = "SELECT title FROM books join artists on books.author_id =?1"
    )
    public List<Book> findByAuthorId(Integer authorId); */
};