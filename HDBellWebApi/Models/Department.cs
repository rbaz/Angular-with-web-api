using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HDBellWebApi.Models
{
    public class Department
    {
        [Key]
        [Column(Order = 1)]
        public int DepartmentId { get; set; }

        public string DName { get; set; }

        public virtual IEnumerable<Employee> Employees { get; set; }
    }
}