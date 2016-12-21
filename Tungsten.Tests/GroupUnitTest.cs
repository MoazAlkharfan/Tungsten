using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Tungsten.Models;

namespace Tungsten.Tests
{
    [TestClass]
    public class GroupUnitTest
    {
        [TestMethod]
        public void NewGroupGetsGUID_Id()
        {
            Group grupp = new Group();

            string[] GuidParts = grupp.Id.Split('-');
            int partOneExpected = 8;
            int partOneActual = GuidParts[0].Length;
            int partTwoExpected = 4;
            int partTwoActual = GuidParts[1].Length;
            int partThreeExpected = 4;
            int partThreeActual = GuidParts[2].Length;
            int partFourExpected = 4;
            int partFourActual = GuidParts[3].Length;
            int partFiveExpected = 12;
            int partFiveActual = GuidParts[4].Length;

            Assert.AreEqual(partOneExpected, 
                            partOneActual);
            Assert.AreEqual(partTwoExpected, 
                            partTwoActual);
            Assert.AreEqual(partThreeExpected, 
                            partThreeActual);
            Assert.AreEqual(partFourExpected, 
                            partFourActual);
            Assert.AreEqual(partFiveExpected, 
                            partFiveActual);
        }

        [TestMethod]
        public void Group_Id_Set_To_Klas_Returns_Klas()
        {
            Group grupp = new Group();
            string expected = "Klas";
            grupp.Id = expected;
            string actual = grupp.Id;

            Assert.AreEqual(expected, actual);
        }
    }
}
