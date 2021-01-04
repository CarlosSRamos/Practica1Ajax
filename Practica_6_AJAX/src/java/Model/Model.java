/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author CarlosU
 */
public class Model {
    Conexion cn;
    public Model(){
        cn = new Conexion();
    }
    public boolean valida(String nombre,String contrasena){
        boolean datos = false;
        try{
            Connection con = cn.getConexion();
            String consulta = "select * from informacion where nombre ='" + nombre + "'and contraseña='" + contrasena + "'";
            Statement st = con.createStatement();
            ResultSet rs = st.executeQuery(consulta);
            datos = rs.next();
            cn.cierraConexion(con);
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            return datos;
        }
    }
    public boolean crea(String nombre,String contrasena){
        boolean datos = false;
        try{
            Connection con = cn.getConexion();
            String query = "insert into informacion values('" + nombre + "','" + contrasena + "');";
            Statement st = con.createStatement();
            st.executeUpdate(query);
            datos = true;
            cn.cierraConexion(con);
        }catch (Exception e){
            e.printStackTrace();
        }finally{
            return datos;
        }
    }
}
