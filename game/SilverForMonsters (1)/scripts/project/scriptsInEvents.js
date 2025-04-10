

const scriptsInEvents = {

	async Fase1_Event24_Act1(runtime, localVars)
	{
		//obter o valor da variável global vidas
		let vidap = runtime.globalVars.vidaplayer;
		
		//REDUZIR VIDA DO PLAYER
		 vidap --;
		
		 // ATUALIZA A VARIÁVEL GLOBAL 
		 runtime.globalVars.vidaplayer = vidap;
		
		//se vidas chegar a zero
		if(vidap <= 0){
			runtime.goToLayout("gameover");
		}
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
