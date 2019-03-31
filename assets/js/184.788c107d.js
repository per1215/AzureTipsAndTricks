(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{489:function(e,t,a){"use strict";a.r(t);var r=a(43),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h4",{attrs:{id:"implementing-azure-search-with-sql-server-and-asp-net-mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-azure-search-with-sql-server-and-asp-net-mvc","aria-hidden":"true"}},[e._v("#")]),e._v(" Implementing Azure Search with SQL Server and ASP.NET MVC")]),e._v(" "),a("p",[e._v("Welcome to a new series, in this series I'll cover Azure Search, SQL Server and putting it all together in a ASP.NET MVC web app. I'll be adding the post to this series below as I go:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks90/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part 1"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks91/",target:"_blank",rel:"noopener noreferrer"}},[e._v("This post - Part 2"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"what-is-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-it","aria-hidden":"true"}},[e._v("#")]),e._v(" What is it?")]),e._v(" "),a("p",[e._v("Azure Search is a search-as-a-service cloud solution that allows you to access APIs (REST and an SDK) to search over your content using web, desktop or mobile apps. There is variety of services that you can attach Azure Search to, including SQL Server - which we'll cover in this tutorial.")]),e._v(" "),a("h4",{attrs:{id:"first-step-creating-the-sql-server-database-that-we-ll-place-the-indexer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-step-creating-the-sql-server-database-that-we-ll-place-the-indexer","aria-hidden":"true"}},[e._v("#")]),e._v(" First Step - Creating the SQL Server Database that we'll place the indexer")]),e._v(" "),a("p",[e._v("Go into the Azure Portal and search for SQL Server and click the Add button.")]),e._v(" "),a("p",[e._v("Give it a database name, resource group and fill out the new server information. For the source, select "),a("strong",[e._v("AdventureWorksLT")]),e._v(" and pricing tier select "),a("strong",[e._v("Basic")]),e._v(".")]),e._v(" "),a("p",[e._v("Your screen should look like the following:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearch1.jpg")}}),e._v(" "),a("p",[a("strong",[e._v("Remember this!")]),e._v(" Double check you selected the select "),a("strong",[e._v("AdventureWorksLT")]),e._v(" database if you want to follow along with this tutorial.")]),e._v(" "),a("h4",{attrs:{id:"take-a-look-at-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#take-a-look-at-the-data","aria-hidden":"true"}},[e._v("#")]),e._v(" Take a look at the data")]),e._v(" "),a("p",[e._v("Now that we have a sample database and it has deployed, let's use "),a("strong",[e._v("Query Editor")]),e._v(" which is inside the SQL Server blade to take a look at the table structure. Note: You can also use "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL Server Management Studio"),a("OutboundLink")],1),e._v(" if you prefer it better.")]),e._v(" "),a("p",[e._v("If you click on "),a("strong",[e._v("Query Editor")]),e._v(" and login as instructed, then you'll see the following:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearch2.png")}}),e._v(" "),a("p",[e._v("As you can see, I expanded the "),a("strong",[e._v("Table")]),e._v(" dropdown and I can drill down again to the column names.")]),e._v(" "),a("p",[e._v("It looks like "),a("strong",[e._v("Customer")]),e._v(" would be a great table to implement search and we could pass in the FirstName or LastName field.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearch3.png")}}),e._v(" "),a("p",[e._v("We could write a simple query such as "),a("code",[e._v("select FirstName, LastName from SalesLT.Customer")]),e._v(" and click Run to take a look at the data.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearch4.png")}})])},[],!1,null,null,null);t.default=s.exports}}]);