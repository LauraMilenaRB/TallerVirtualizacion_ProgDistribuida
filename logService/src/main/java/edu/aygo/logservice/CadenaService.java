package edu.aygo.logservice;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import com.mongodb.MongoClient;

public class CadenaService {
    MongoClient client = new MongoClient("localhost", 27017); //connect to mongodb
    Datastore datastore = new Morphia().createDatastore(client, "cadena"); //select shop collection
    static final Logger logger = Logger.getLogger(CadenaService.class.getName());
    List<Cadena> lista=null;

    public List<Cadena> getCadena(String register){
        Date date = new Date();
        Timestamp timestamp = new Timestamp(date.getTime());
        try{
            Integer idnum=(int) datastore.getCount(Cadena.class)+1;
            datastore.save(new Cadena(idnum,register,timestamp));
            lista=datastore.createQuery(Cadena.class).order("-id").limit(10).asList();
        }catch (Exception e){
            logger.info(e.toString());
        }
        logger.info("envio de lista");
        return lista;
    }
}
