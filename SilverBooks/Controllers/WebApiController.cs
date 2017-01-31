using SilverBooks.Models;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;


namespace SilverBooks.Controllers
{
    [RoutePrefix("api/v1")]
    public class WebApiController : ApiController
    {
        [Route("books/{bookId}")]
        [HttpGet]
        public async Task<HttpResponseMessage> GetBooks(HttpRequestMessage request, int bookId = 0)
        {
            try
            {
                var books = new List<Book>();

                var book1 = new Book
                {
                    Id = 1,
                    Name = "The Winter Over",
                    ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/51G4yhDlZKL.jpg",
                    Price = 20,
                    Description = "Each winter the crew at the Shackleton South Pole Research Facility faces nine months of isolation, round-the-clock darkness, and one of the most extreme climates on the planet. For thirty-something mechanical engineer Cass Jennings, Antarctica offers an opportunity to finally escape the guilt of her troubled past and to rebuild her life.",
                    Category = "Mystery, Thriller & Suspense"
                };
                var book2 = new Book
                {
                    Id = 2,
                    Name = "In the Shadow of Lakecrest",
                    ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/51OZyWIGZrL.jpg",
                    Price = 25,
                    Description = "The year is 1928. Kate Moore is looking for a way out of the poverty and violence of her childhood. When a chance encounter on a transatlantic ocean liner brings her face-to-face with the handsome heir to a Chicago fortune, she thinks she may have found her escape—as long as she can keep her past concealed.",
                    Category = "Literature & Fiction"
                };

                var book3 = new Book
                {
                    Id = 3,
                    Name = "Tools of Titans",
                    ImageUrl = "https://images-na.ssl-images-amazon.com/images/I/51M-tW14QgL._SX387_BO1,204,203,200_.jpg",
                    Price = 15,
                    Description = "For the last two years, I’ve interviewed more than 200 world-class performers for my podcast, The Tim Ferriss Show. The guests range from super celebs (Jamie Foxx, Arnold Schwarzenegger, etc.) and athletes (icons of powerlifting, gymnastics, surfing, etc.) to legendary Special Operations commanders and black-market biochemists. For most of my guests, it’s the first time they’ve agreed to a two-to-three-hour interview. This unusual depth has helped make The Tim Ferriss Show the first business/interview podcast to pass 100 million downloads.",
                    Category = ""
                };

                books.Add(book1);
                books.Add(book2);
                books.Add(book3);

                if (bookId != 0)
                    books = books.FindAll(i => i.Id == bookId);

                return request.CreateResponse(HttpStatusCode.OK, books);
            }
            catch (Exception ex)
            {
                return request.CreateErrorResponse(HttpStatusCode.ExpectationFailed, ex);
            }
        }
    }
}