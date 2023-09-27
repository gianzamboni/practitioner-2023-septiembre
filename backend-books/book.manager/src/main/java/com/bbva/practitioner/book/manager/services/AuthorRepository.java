import com.bbva.practitioner.book.manager.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuthorRepository extends JpaRepository<Book, Integer> {};