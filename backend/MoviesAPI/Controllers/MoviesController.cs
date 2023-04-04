using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : Controller
    {
        private MoviesDbContext context;
        public MoviesController(MoviesDbContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movies> Get()
        {
            var X = context.Movies.ToArray();

            return X;
        }

        

    }
}
