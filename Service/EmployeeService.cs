using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DotnetPiperAngularApp.Models;

namespace DotnetPiperAngularApp.Service
{
    public class EmployeeService
    {
        #region List collection for Version1
        public static List<Employee> listEmp = new List<Employee>()
        {
            new Employee()
            {
                ID =001, FirstName="Sachin", LastName="Kalia"
            },
             new Employee()
            {
                ID =002, FirstName="Dhnanjay" ,LastName="Kumar"
            },
            new Employee()
            {
                ID =003, FirstName="Ravish", LastName="Sindhwani"
            },
             new Employee()
            {
                ID =004, FirstName="Rahul" ,LastName="Saxena"
            },

        };

        #endregion List collection for Version1

        public List<Employee> GetEmployeeCollection()
        {
            return listEmp;
        }

        public List<Employee> CreateEmployee(Employee objEmp)
        {
            listEmp.Add(objEmp);
            return listEmp;
        }
    }
}