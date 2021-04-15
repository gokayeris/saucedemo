package utilities;

import java.io.FileInputStream;
import java.util.Properties;

public class ConfigReader {



    //this class to reach and read the data in configuration.properties
    // Create properties instance level
    private static Properties properties;

    static {

        //we use "static" to reach it from everywhere
        String path = "configuration.properties";
        //to open configuration.properties file we must use FileInputStream class
        FileInputStream fileInputStream;

        try {
            fileInputStream = new FileInputStream(path);
            properties = new Properties();
            properties.load(fileInputStream);
            fileInputStream.close();

        } catch (Exception e) {

        }
    }

    public static String getProperty(String key) {
        String value = properties.getProperty(key);
        return value;

    }

}

