using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;


namespace SilverBooks
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
        #if DEBUG
            System.Web.Optimization.BundleTable.EnableOptimizations = false;
        #else
            System.Web.Optimization.BundleTable.EnableOptimizations = true;
        #endif

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/angular").Include(
                    "~/Scripts/angular.js",
                    "~/Scripts/angular-route.js",
                    "~/Scripts/angular-animate.js",
                    "~/Scripts/angular-sanitize.js",
                    "~/Scripts/angular-ui/ui-bootstrap.js"));
        }
    }
}