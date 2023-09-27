package com.bbva.practitioner.book.manager.models;

import com.sun.istack.NotNull;
import org.springframework.lang.NonNull;

import javax.persistence.*;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Integer id;

    @NotNull
    String title;

    @NotNull
    Integer authorId;

    /* Descomentar las lineas de abajo despues de haber creado y configurado los autores */
    /*@ManyToOne
    @JoinColumn(name="author_id")
    Author author;*/

    public Book() {}
    public Book(String title, Integer authorId) {
        this.title = title;
        this.authorId = authorId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(@NonNull String title) {
        this.title = title;
    }
    public Integer getAuthorId() {
        return this.authorId;
    }
    public void setAuthor(Integer authorId) {
        this.authorId = authorId;
    }
}
