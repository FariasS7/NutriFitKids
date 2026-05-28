package SRC.API;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class ApiServer {

    public static void main(String[] args) throws IOException {

        // CRIA SERVIDOR

        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        // ENDPOINT

        server.createContext("/teste", (HttpExchange exchange) -> {

            String resposta = "API NutriKids funcionando!";

            exchange.sendResponseHeaders(200, resposta.length());

            OutputStream os = exchange.getResponseBody();

            os.write(resposta.getBytes());

            os.close();
        });

        server.setExecutor(null);

        server.start();

        System.out.println("Servidor rodando em http://localhost:8080/teste");
    }
}
