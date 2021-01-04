/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


/**
 *
 * @author CarlosU
 */

public class Conexion {
    private String driver;
    private String conexion;
    private String nombreus;
    private String contrasena;
    
    public Conexion(){
        driver = "com.mysql.cj.jdbc.Driver";
        conexion = "jdbc:mysql://127.0.0.1:3307/usuarios";
        nombreus = "carlossr";
        contrasena = "ajax";
    }
    
    public Connection getConexion() throws ClassNotFoundException{
        Connection cn;
        try{
            Class.forName(driver);
            cn = DriverManager.getConnection(conexion,nombreus,contrasena);
            return cn;
        }catch(SQLException e){
            System.out.println("error: "+ e);
            return null;
        }
    }
    
    public void cierraConexion(Connection cn){
        try{
            if (cn != null && !cn.isClosed()){
                cn.close();
            }
        } catch (SQLException e){
            e.printStackTrace();
        }
    }
}
