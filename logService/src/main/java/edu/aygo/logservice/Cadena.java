package edu.aygo.logservice;

import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Property;
import java.sql.Timestamp;

@Entity ( "Cadena" )
public class Cadena {

    @Id
    private Integer id;
    @Property ( "value" )
    private String value;
    @Property ( "dateRegister" )
    private Timestamp dateRegister;



    public Cadena(Integer id,String val, Timestamp date){
        this.id=id;
        value=val;
        dateRegister=date;
    }

    public Cadena(){
    }

    public String getValue() {
        return value;
    }

    public Timestamp getDateRegister() {
        return dateRegister;
    }
}
