using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace HDBellWebApi.Models
{
    public class Ticket
    {
        [Key]
        [Column(Order = 1)]
        public int TicketId { get; set; }

        [Required]
        public DateTime TDateCreation { get; set; }

        [Required]
        [MaxLength(128)]
        [DataType(DataType.MultilineText)]
        public string TDescription { get; set; }

        [Required]
        public string ProjectName { get; set; }

        public int EmployeeId { get; set; }
        //public virtual Employee Employee { get; set; }

    }
}