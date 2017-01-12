var db = require('./db');

db = new db();

var data ={
  'dpt':'IIM'
}

db.select().field("*").from("course").where("id=1233").order("id").limit(10).test();

db.insert().into("s").set(data).test();

db.delete().from("student").where("name=3").where("x>5").test();

db.update().table("user").where("id=5").set(data).test();

db.select().field("student.classid").field("student.id").from("student").join("class").where("student.classid=class.id").test();