using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HDBellWebApi.Models
{
    public class Employee
    {
        [Key]
        [Column(Order = 1)]
        public int EmployeeId { get; set; }

        public string Name { get; set; }

        public virtual int DepartmentId { get; set; }

        //public virtual Department Department { get; set; }
    }
}