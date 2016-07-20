using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DotnetPiperAngularApp.Models;
using DotnetPiperAngularApp.Service;

namespace DotnetPiperAngularApp.Controllers
{
    public class EmployeeController : Controller
    {
        //temporary repository till integration with DB this will be translated into restful get query
        EmployeeService objEmployeeService = new EmployeeService();

        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public JsonResult GetEmployeeList()
        {
            return Json(objEmployeeService.GetEmployeeCollection(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public int SaveEmployee(Employee objEmployee)
        {
            objEmployeeService.CreateEmployee(objEmployee);
            return objEmployee.ID;
        }

         [HttpGet]
        public ActionResult AddEmployee()
        {
            return View();
        }

        //[HttpPost]
        //public JsonResult SaveEmployee(Employee objEmp)
        //{
        //    return Json(objEmployeeService.CreateEmployee(objEmp), JsonRequestBehavior.AllowGet);
        //}

    }
}
