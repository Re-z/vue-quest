<?php
ob_start();
 function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = '';

    return $ipaddress;
}

function get_referer() 
{
	$referer = '';
	if (isset($_SERVER['HTTP_REFERER']))
		$referer = $_SERVER['HTTP_REFERER'];
	
	return $referer;
}

function getRequestParams(){
	$params = array();
	
	// take get params from referer
	$params['referer'] = get_referer();
	$parts = parse_url($params['referer']);
	parse_str($parts['query'], $query);	
	
	
	if(isset($_POST['affiliate_id']))
		$params['affiliate_id'] = $_POST['affiliate_id'];
	else $params['affiliate_id'] = '5';
	
	if(isset($_POST['source']))
		$params['source'] = $_POST['source'];
	
	if(isset($_POST['password']))
		$params['password'] = $_POST['password'];
	else $params['password'] = '';
	
	if(isset($_POST['first_name']))
		$params['first_name'] = $_POST['first_name'];
	
	if(isset($_POST['email']))
		$params['email'] = $_POST['email'];
	else $params['email'] = '';
	
	if(isset($_POST['phone']))
		$params['phone'] = $_POST['phone'];
	
	if(isset($_POST['country']))
		$params['country'] = $_POST['country'];
	
	if(isset($_POST['result_url']))
		$params['result_url'] = $_POST['result_url'];
	
	return $params;
}

function redirect($url, $statusCode = 303)
{
   header('Location: ' . $url, true, $statusCode);
   die();
}

function sendToMonfex($p) {
	$url = 'https://www.monfex.com/api/affiliate/register';
	
	$data = array(
		'affiliate_id' => $p['affiliate_id'],
		'first_name' => $p['first_name'],
		'password' => $p['password'],
		'phone' => $p['phone'],
		'email' => $p['email'],
		'country'=> $p['country'],
		'source' => $p['source']
	);
	
	// use key 'http' even if you send the request to https://...
	$options = array(
		'http' => array(
			'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
			'method'  => 'POST',
			'content' => http_build_query($data)
		)
	);
	$context  = stream_context_create($options);
	$result = file_get_contents($url, false, $context);	
	
	//LOGER BEGIN
	$data['response'] = $result;
	$logtxt = json_encode($data);
	$myfile = file_put_contents('logs.txt', $logtxt.PHP_EOL , FILE_APPEND | LOCK_EX);
	//LOGER END
	

	return $result;
	
}




    //main logic --------------
	
	$request_params = getRequestParams();	
	$regStatus = sendToMonfex($request_params);
	echo $regStatus;
	//redirect($request_params['result_url']); //redirect to thnx page
 ?>   