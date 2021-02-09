### Database ORM
* Create a DataContext class implementing DbContext
* Utilizing Microsoft's Entity Framework
* Utilize Microsoft.EntityFrameworkCore.Design to assist in creating database
* Utilizing Pomelo.entityframeworkcore.mysql for mysql database connection (remote to my server)
* Add DbContext to Startup.cs
* Create connection string to appsettings 
* Add connection string to as _config value to DbContext option in Startup.cs
* `dotnet ef migrations add InitialCreate -o Data/Migrations` to Tables in database for Entities
* `dotnet ef database update` to create the database and update.

### Asynchronous Code
* Use `async` in the method definition
* Use `await` in the return statemnt
* Use Async version of return methods.

### Authenitcation
* Utilizes JW Tokens

