using HDBellWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Data.Entity;

namespace HDBellWebApi.Controllers
{
    [RoutePrefix("Api/Ticket")]
    public class xxTicketController : ApiController
    {
        TicketContext objEntity = new TicketContext();

        [HttpGet]
        [Route("AllTicketDetails")]
        public IEnumerable<Ticket> GetAllTicket()
        {
            try
            {
                return objEntity.Tickets.AsEnumerable();
            }
            catch (Exception e)
            {
                Console.WriteLine("{0} Exception caught.", e);
                return null;
            }
        }

        [HttpGet]
        [Route("GetTicketId/{ticketId}")]
        [Authorize]
        public IHttpActionResult GetTicketById(int ticketId)
        {
            Ticket objEmp = new Ticket();
            int ID = ticketId;
            try
            {
                objEmp = objEntity.Tickets.Find(ID);
                if (objEmp == null)
                {
                    return NotFound();
                }

            }
            catch (Exception)
            {
                throw;
            }

            return Ok(objEmp);
        }

        [HttpPost]
        [Route("InsertTicket")]
        public IHttpActionResult PostTicket(Ticket data)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                objEntity.Tickets.Add(data);
                objEntity.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }



            return Ok(data);
        }

        [HttpPut]
        [Route("UpdateTicket")]
        public IHttpActionResult PutTicket(Ticket ticket)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                Ticket objEmp = new Ticket();
                objEmp = objEntity.Tickets.Find(ticket.TicketId);
                if (objEmp != null)
                {
                    objEmp.TicketId = ticket.TicketId;
                    objEmp.ProjectName = ticket.ProjectName;
                    objEmp.TDateCreation = ticket.TDateCreation;
                    objEmp.TDescription = ticket.TDescription;
                    objEmp.EmployeeId = ticket.EmployeeId;
                    //objEmp.Employee = ticket.Employee;


                }
                int i = this.objEntity.SaveChanges();

            }
            catch (Exception)
            {
                throw;
            }
            return Ok(ticket);
        }
        [HttpDelete]
        [Route("DeleteTicket")]
        public IHttpActionResult DeleteTicket(int id)
        {
            //int empId = Convert.ToInt32(id);  
            Ticket ticket = objEntity.Tickets.Find(id);
            if (ticket == null)
            {
                return NotFound();
            }

            objEntity.Tickets.Remove(ticket);
            objEntity.SaveChanges();

            return Ok(ticket);
        }
    }

}

