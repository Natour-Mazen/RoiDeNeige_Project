
// creation de la zone de jeu

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'DivJeu', {preload: preload,  create: create, update: update});


/** PrÃ©chargement des Ã©lÃ©ments du jeu  **/

function preload()
{ 
   game.load.spritesheet('heros','medias/spritesheet.png', 60, 74);	
   game.load.image('fond','medias/background.1.png');
   game.load.image('banana','medias/banana.png');
   game.load.image('Plateforme','medias/Plateforme.png');
   game.load.image('Piege','medias/Piege.png');
   game.load.image('Plateformebouge','medias/Plateformebouge.png'); 
   game.load.image('Piege1','medias/Piege1.png');
   game.load.image('Diamant1','medias/Diamant1.png'); 
   game.load.image('Diamant2','medias/Diamant2.png');
   game.load.image('Diamant3','medias/Diamant3.png');
   game.load.image('Diamant4','medias/Diamant4.png');
   game.load.image('Diamant5','medias/Diamant5.png');
   game.load.image('Diamant6','medias/Diamant6.png');
   game.load.image('Diamant7','medias/Diamant7.png');
   game.load.image('Diamant8','medias/Diamant8.png');
   game.load.image('Diamantfinal','medias/Diamantfinal.png');
   game.load.image('Diamant10','medias/Diamant10.png');
    game.load.image('Piege2','medias/Piege2.png');
}

/** CrÃ©ation de la scÃ¨ne du jeu * */

function create() 
{
     game.physics.startSystem(Phaser.Physics.ARCADE) ;
	game.add.sprite(0,0,'fond');
	 cursors=game.input.keyboard.createCursorKeys(); 
	space=game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
//banana
	banana=game.add.sprite(300,700,'banana');
	game.physics.arcade.enable(banana); 
	banana.body.immovable=true;
	banana.x=467.5;
	bananay=10;
    banana.anchor.setTo(0.5,0.5);
//Heros
	leHeros=game.add.sprite(300,200,'heros'); 
	leHeros.anchor.setTo(0.5,0.5);
	leHeros.x=220;
	leHeros.y=530;
    leHeros.animations.add('marche', [3, 4, 5, 6], 3, false);
    leHeros.animations.add('repos', [0, 1, 2, 1], 2, false);
	leHeros.play('repos');
	game.physics.arcade.enable(leHeros);
		leHeros.body.bounce.y = 0.2;
		leHeros.body.gravity.y = 400;
		leHeros.body.collideWorldBounds = true;
	leHeros.body.setSize(25, 61, 15, 15); 
// Platforme
    groupePlateforme = game.add.group();
    groupePlateforme = game.add.physicsGroup();
	groupePlateformePiege = game.add.group();
	//platform bas
			//1er platforme
			var unePlateforme = groupePlateforme.create(86,565, 'Plateforme');
			unePlateforme.scale.setTo(0.381, 1); 
			//2eme platforme
			var unePlateforme = groupePlateforme.create(256,515, 'Plateforme');
			unePlateforme.scale.setTo(0.113, 0.6) 
			//3eme platforme
			var unePlateforme = groupePlateforme.create(0,510, 'Plateforme');
			unePlateforme.scale.setTo(0.16, 0.9) 
			//4eme platforme
			var unePlateforme = groupePlateforme.create(75,410, 'Plateforme');
			unePlateforme.scale.setTo(0.37, 0.9);
			//5eme platforme
			var unePlateforme = groupePlateforme.create(-25,340, 'Plateforme');
			unePlateforme.scale.setTo(0.12, 1);
			//6eme platforme
			var unePlateforme = groupePlateforme.create(138,272, 'Plateforme');
			unePlateforme.scale.setTo(0.185,1);
			// 7eme platforme
			var unePlateforme = groupePlateforme.create(265,332, 'Plateforme');
			unePlateforme.scale.setTo(0.185, 1 ); 
			//8eme platforme
			var unePlateforme = groupePlateforme.create(390,284, 'Plateforme');
			unePlateforme.scale.setTo(0.113, 0.6); 
			//9eme platforme
			var unePlateforme = groupePlateforme.create(493,360, 'Plateforme');
			unePlateforme.scale.setTo(0.1119, 0.5) ;
			//10eme platforme
			var unePlateforme = groupePlateforme.create(604,410, 'Plateforme');
			unePlateforme.scale.setTo(0.5, 1.1) 
			//11eme platforme
			var unePlateforme = groupePlateforme.create(570,527, 'Plateforme');
			unePlateforme.scale.setTo(0.24, 1.3) ;
			//12eme platforme
			var unePlateforme = groupePlateformePiege.create(240,565, 'Piege');
			unePlateforme.scale.setTo(1.02, 1);
			//13eme platforme
			var unePlateforme = groupePlateformePiege.create(670,560, 'Piege');
			unePlateforme.scale.setTo(0.9,0.9); 
			//14eme platforme
			var unePlateforme = groupePlateforme.create(530,475, 'Plateforme');
			unePlateforme.scale.setTo(0.09, 0.5) ;			
	//platform haut
			//1re platforme
			var unePlateforme = groupePlateforme.create(-15,195, 'Plateforme');
			unePlateforme.scale.setTo(0.13, 1.2) 
			//2eme platforme
			var unePlateforme = groupePlateforme.create(310,64, 'Plateforme');
			unePlateforme.scale.setTo(0.3,0.8);
			//3eme platforme
			var unePlateforme = groupePlateforme.create(572,69, 'Plateforme');
			unePlateforme.scale.setTo(1,1);
			groupePlateforme.setAll('body.immovable', true);
//groupePlateformePiege	
		game.physics.arcade.enable(groupePlateformePiege); 
	groupePlateformePiege.setAll('body.immovable', true);
//Plateformebouge
	Plateformebouge = game.add.sprite(10, 167.5, 'Plateformebouge');
	game.physics.arcade.enable(Plateformebouge);    
	Plateformebouge.body.velocity.x=250;
	Plateformebouge.body.collideWorldBounds = true ;
	Plateformebouge.body.bounce.set(1);
	Plateformebouge.body.immovable=true;
//Piege1
	Piege1=game.add.sprite(265,260,'Piege1');
	game.physics.arcade.enable(Piege1); 
	Piege1.body.immovable=true;
//Piege2
	Piege2=game.add.sprite(495,380,'Piege2');
	game.physics.arcade.enable(Piege2); 
	Piege2.body.immovable=true;
// texte
    introText = game.add.text(game.world.centerX, 180, '', { font: "60px calibri", fill: "MediumBlue", align: "top" });
    introText.anchor.setTo(0.5,0.5);
    introText.visible = true;
//Diamants
	//Diamant1
	Diamant1=game.add.sprite(350,20,'Diamant1');
	game.physics.arcade.enable(Diamant1); 
	Diamant1.body.immovable=true;
	//Diamant2
	Diamant2=game.add.sprite(750,370,'Diamant2');
	game.physics.arcade.enable(Diamant2); 
	Diamant2.body.immovable=true;
	//Diamant3
	Diamant3=game.add.sprite(650,25,'Diamant3');
	game.physics.arcade.enable(Diamant3); 
	Diamant3.body.immovable=true;
	//Diamant4
	Diamant4=game.add.sprite(380,310,'Diamant4');
	game.physics.arcade.enable(Diamant4); 
	Diamant4.body.immovable=true;
	//Diamant5
	Diamant5=game.add.sprite(50,10,'Diamant5');
	game.physics.arcade.enable(Diamant5); 
	Diamant5.body.immovable=true;
	//Diamant6
	Diamant6=game.add.sprite(155,364,'Diamant6');
	game.physics.arcade.enable(Diamant6); 
	Diamant6.body.immovable=true;
	//Diamant7
	Diamant7=game.add.sprite(280,200,'Diamant7');
	game.physics.arcade.enable(Diamant7); 
	Diamant7.body.immovable=true;
	//Diamant8
	Diamant8=game.add.sprite(413,540,'Diamant8');
	game.physics.arcade.enable(Diamant8); 
	Diamant8.body.immovable=true;
	//Diamantfinal
	Diamantfinal=game.add.sprite(760,450,'Diamantfinal');
	game.physics.arcade.enable(Diamantfinal); 
	Diamantfinal.body.immovable=true;
	//Diamant10
	Diamant10=game.add.sprite(768,114,'Diamant10');
	game.physics.arcade.enable(Diamant10); 
	Diamant10.body.immovable=true;
}

function update()
{
     banana.y=banana.y-5;
	  banana.angle=banana.angle+10;
	 if(banana.y==0){
		 banana.y=600;
	 };
	 leHeros.body.velocity.x=0;
	 if(cursors.right.isDown){
        leHeros.body.velocity.x=200;
        leHeros.animations.play('marche');
		leHeros.scale.x = -1;
	 }
	 else if(cursors.left.isDown){
       leHeros.body.velocity.x= -200;
        leHeros.animations.play('marche');
		leHeros.scale.x = 1;
	 }
	 
	 else{
        leHeros.animations.play('repos');
	 }
//collision 
	game.physics.arcade.collide(leHeros, groupePlateforme ); 
	game.physics.arcade.collide(leHeros, banana, movePlayer );
    game.physics.arcade.collide(leHeros,Plateformebouge); 	 
	game.physics.arcade.collide(leHeros,groupePlateformePiege ,movePlayer );
	game.physics.arcade.collide(leHeros,Piege1,movePlayer );
	game.physics.arcade.collide(leHeros, Diamant1, collectDiamant1, null, this);
	game.physics.arcade.collide(leHeros,Diamant2, collectDiamant2, null, this);
	game.physics.arcade.collide(leHeros,Diamant3, collectDiamant3, null, this);
	game.physics.arcade.collide(leHeros,Diamant4, collectDiamant4, null, this);
	game.physics.arcade.collide(leHeros,Diamant5, collectDiamant5, null, this);
	game.physics.arcade.collide(leHeros,Diamant6, collectDiamant6, null, this);
	game.physics.arcade.collide(leHeros,Diamant7, collectDiamant7, null, this);
	game.physics.arcade.collide(leHeros,Diamant8, collectDiamant8, null, this);
	game.physics.arcade.collide(leHeros,Diamantfinal, collectDiamantfinal, null, this);
	game.physics.arcade.collide(leHeros,Diamant10, collectDiamant10, null, this);
	game.physics.arcade.collide(leHeros,Piege2,movePlayer );
	
	if (space.isDown && (leHeros.body.onFloor() || leHeros.body.touching.down)){
	leHeros.body.velocity.y = -290;
	}
}
 
 function movePlayer(){
	leHeros.x=220;
	leHeros.y=500;  
}
function collectDiamant1 () 
{ 
	Diamant1.kill();    // supprime le diamant de l'Ã©cran de jeu   
}
function collectDiamant2() 
{ 
	Diamant2.kill();    // supprime le diamant de l'Ã©cran de jeu   
}
function collectDiamant3() 
{ 
	Diamant3.kill();    // supprime le diamant de l'Ã©cran de jeu   
}
function collectDiamant4() 
{ 
	Diamant4.kill();    // supprime le diamant de l'Ã©cran de jeu   
}
function collectDiamant5() 
{ 
	Diamant5.kill();    // supprime le diamant de l'Ã©cran de jeu   
}
function collectDiamant6() 
{ 
	Diamant6.kill();    // supprime le diamant de l'Ã©cran de jeu   
}
function collectDiamant7() 
{ 
	Diamant7.kill();    // supprime le diamant de l'Ã©cran de jeu   
}
function collectDiamant8() 
{ 
	Diamant8.kill();    // supprime le diamant de l'Ã©cran de jeu   
}
function collectDiamantfinal () 
{ 
    leHeros.kill();
	Diamant10.kill();
	Diamantfinal.kill();
	Diamant8.kill();	
	Diamant7.kill();
	Diamant6.kill();
	Diamant5.kill();
	Diamant4.kill();
	Diamant3.kill();
	Diamant2.kill();
	Diamant1.kill();	
	banana.kill();
	Plateformebouge.kill();
	introText.text = " Bravo,vous avez gagnÃ© ! \n Faites F5 pour rejouer";
    introText.visible = true;
}
function collectDiamant10() 
{ 
	Diamant10.kill();    // supprime le diamant de l'Ã©cran de jeu   
}
function restart (){
	introText.visible = false;
}
