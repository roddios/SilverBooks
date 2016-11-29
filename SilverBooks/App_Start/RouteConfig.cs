using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace SilverBooks
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

           routes.MapRoute(
              name: "HomeModule",
              url: "Home/{*catchall}",
              defaults: new { controller = "Home", action = "Index" }
          );


            routes.MapRoute(
                name: "ProductModule",
                url: "Product/{*catchall}",
                defaults: new { controller = "Product", action = "Index" }
            );

            routes.MapRoute(
                name: "OrderModule",
                url: "Order/{*catchall}",
                defaults: new { controller = "Order", action = "Index" }
            );

          
            // Default routing
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );

        }
    }
}
