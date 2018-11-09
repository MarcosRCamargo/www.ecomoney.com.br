<?php
/**
 * Created by PhpStorm.
 * User: Marcos Rubens de Camargo
 * Date: 03/11/2018
 * Time: 00:08
 * $url = 'http://localhost:8080/api/materials';
 * $json = file_get_contents($url);
 * $obj = json_decode($json);
 * $data = json_decode($json, true);
 * //var_dump($data);
 */
//require '../../vendor/autoload.php';


//class Materials
//{
//    public function getMaterials()
//    {
//        $client = new GuzzleHttp\Client(['base_uri' => 'http://localhost:8080/api/']);
//        // Envia requisisão para https://ecomoney.com.br/api/test
//        $response = $client->request('GET', 'materials');
//        $body = $response->getBody();
//        $json = json_decode($body);
//        return $json;
//    }
//
//    public function listarMaterial()
//    {
//        $json = $this->getMaterials();
//        foreach ($json as $key => $values) {
//            echo "id: " . $values->id_materialtypes . "<br>";
//            echo "Descrição: " . $values->desc_material . "<br>";
//            echo "Valor: " . $values->price . "<br>";
//            echo "Pontos: " . $values->point_values . "<br>";
//        }
//    }
//    public function imprimirLista()
//    {
//        self::getMaterials();
//    }
//}
 $url = 'http://localhost:8080/api/materials';
 $json = file_get_contents($url);
 $obj = json_decode($json);
 $data = json_decode($json, true);

echo $obj;
?>

