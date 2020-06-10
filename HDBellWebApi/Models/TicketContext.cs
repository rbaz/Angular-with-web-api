using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace HDBellWebApi.Models
{
    public class TicketContext : DbContext
    {
        public TicketContext() : base("name=HDeskBellDataBase")
        {            
        }

        public IDbSet<Department> Departments { get; set; }
        public IDbSet<Employee> Employees { get; set; }
        public IDbSet<Ticket> Tickets { get; set; }
        public IDbSet<Project> Projects { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.Configurations.Add(new Migrations.Configuration());
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }

    }
}