  function ShowAkhir()
                {
                     if(document.getElementById("regakhir").style.display == 'none')
                    {
                            document.getElementById("regakhir").style.display='block';
                            document.getElementById("regawal").style.display='none';
                    }
                    else
                     {
                            document.getElementById("regakhir").style.display = 'none';
                     }
                }
            function ShowAwal()
                {
                     if(document.getElementById("regawal").style.display == 'none')
                    {
                            document.getElementById("regawal").style.display='block';
                            document.getElementById("regakhir").style.display='none';
                    }
                    else
                     {
                            document.getElementById("regawal").style.display = 'none';
                     }
                }
				
			function check(form)
				{
					if(form.userId.value == "admin" && form.password.value == "testing")
						{
							window.location="dashboard.html";
						}
							else
						{
							alert("error password or username");
						}
				}
				
			function logingg()
				{	
					var uicon = document.getElementById("usericon").src;
					var picon = document.getElementById("passicon").src;
					var cicon = document.getElementById("conficon").src;
					var nicon = document.getElementById("nameicon").src;
					var eicon = document.getElementById("emailicon").src;
					var aicon = document.getElementById("avaicon").src;
					var dicon = document.getElementById("dateicon").src;
					var lokasi = "file:///C:/xampp/htdocs/Progin/pict/centang.png";
					
					if ((uicon == lokasi) && (picon == lokasi) && (cicon == lokasi) && (nicon == lokasi) && (eicon == lokasi) && (aicon == lokasi) && (dicon == lokasi))
							{
								document.getElementById("submitb").disabled = false;
							}
				}
			
			function masuk()
				{
					window.location="dashboard.html";
				}
			
			function user_validating()
				{
					var userid = document.registration.username.value;
					var userpass = document.registration.password.value;
					
					if((userid.length >= "5") && (userid != userpass))
						{
							document.getElementById("usericon").src="pict/centang.png";
						}
							else
						{
							document.getElementById("usericon").src="pict/canceled.png";
						}
				}
				
			function pass_validating()
				{
					var userid = document.registration.username.value;
					var userpass = document.registration.password.value;
					var usermail = document.registration.email.value;
					var confpass = document.registration.confirmpass.value;
					
					if((userpass != userid) && (userpass.length >= "8") && (userpass != usermail))
						{
							if(userpass != confpass)
								{
									document.getElementById("conficon").src="pict/canceled.png";
								}
							document.getElementById("passicon").src="pict/centang.png";
						}
							else
						{
							document.getElementById("passicon").src="pict/canceled.png";
						}
						
				}
				
			function conf_validating()
				{
					var userpass = document.registration.password.value;
					var confpass = document.registration.confirmpass.value;
					
					if(confpass == userpass)
						{
							document.getElementById("conficon").src="pict/centang.png";
						}
							else
						{
							document.getElementById("conficon").src="pict/canceled.png";
						}
				}
			
			function nama_validating()
				{
					var name = document.registration.namaleng.value;
					
					if(name.match(/([a-zA-Z])+([ \t\r\n\v\f])+([a-zA-Z])/))
						{
							document.getElementById("nameicon").src="pict/centang.png";
						}
							else
						{
							document.getElementById("nameicon").src="pict/canceled.png";
						}
				}
			

			function email_validating()
				{
					var emails = document.registration.email.value;
					
					if(emails.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i))
						{
							document.getElementById("emailicon").src="pict/centang.png";
						}
							else
						{
							document.getElementById("emailicon").src="pict/canceled.png";
						}
				}
			
			function date_validating()
				{
					document.getElementById("dateicon").src="pict/centang.png";
				}
			
			function avatar_validating()
				{
					var ekstensi = document.registration.avatar.value;
					
					if((ekstensi.lastIndexOf(".jpg") != -1) || (ekstensi.lastIndexOf(".jpeg") != -1) )
						{
							document.getElementById("avaicon").src="pict/centang.png";
						}
							else
						{
							document.getElementById("avaicon").src="pict/canceled.png";
						}
				}
			
			function isformvalid()
				{
					var uservalid = document.getElementById("usericon").src;
					var userid = document.registration.username.value;
					var userpass = document.registration.password.value;
					
					if((userid.length >= "5") && (userid != userpass))
						{
							document.getElementsByName("submit")[0].disabled = false;
						}
				}			
			
			function logine()
				{
					var a = document.getElementById("username");
					var b = document.getElementById("password");
					var flag = false;
					
					var xmlhttp;
					if (window.XMLHttpRequest)
						{
							//code buat IE7 dan browser lainnya
							xmlhttp = new XMLHttpRequest();
						}
							else
						{
							xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
						}
						
						xmlhttp.onreadystatechange = function()
							{
								if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
									{
										if (xmlhttp.responseText.search("true") != -1)
											{
												alert("Login berhasil ");
												window.location="dashboard.php";
												if (typeof(Storage) != "undefined")
													{
														localStorage.setItem('username',a.value);
													}
														else
													{
														alert("Sorry, your browser does not support web storage "); 
													}
														flag = true;
											}
												else
											{
												alert("Login gagal ");
											}
									}
							}
						xmlhttp.open("POST","cek.php",true);
						xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
						xmlhttp.send("username="+a.value+"&password="+b.value);
						
						return flag;
				}
				
			function isAlreadyLogin()
				{
					if (typeof(Storage) != "undefined")
						{
							var xmlhttp;
							if (window.XMLHttpRequest)
								{
									xmlhttp = new XMLHttpRequest();
								}
									else
								{
									xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
								}
							
							if (localStorage.getItem('username'))
								{
									alert("Already login");
									
									xmlhttp.onreadystatechange = function()
										{
											if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
												{
													window.location =("dashboard.php");
												}
										}
									xmlhttp.open("GET","getLocal.php?local="+localStorage.getItem('username'),true);
									xmlhttp.send();
								}
									else
								{
									generateDate();
									alert("Belum Login");
								}
						}
							else
						{
							alert("Sorry, your browser does not support web storage.. ");
						}
				}
				
