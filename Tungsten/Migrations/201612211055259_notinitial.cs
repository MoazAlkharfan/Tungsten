namespace Tungsten.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class notinitial : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Courses", "Subject", c => c.String());
            AddColumn("dbo.Courses", "Level", c => c.String());
            DropColumn("dbo.Courses", "Name");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Courses", "Name", c => c.String());
            DropColumn("dbo.Courses", "Level");
            DropColumn("dbo.Courses", "Subject");
        }
    }
}
