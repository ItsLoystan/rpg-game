const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

window.addEventListener('load', () => {
    localStorage.clear();
    console.log('Local storage cleared on refresh.');
});


canvas.width = 960
canvas.height = 540

//converts data into 2d map
const collisionsMap = [] 
for (let i = 0; i < collisions.length; i += 80) {
    collisionsMap.push(collisions.slice(i, 80 + i))
}

const npcMap = [] 
for (let i = 0; i < npcMapData.length; i += 80) {
    npcMap.push(npcMapData.slice(i, 80 + i))
}

const battleMap = [] 
for (let i = 0; i < battleNPCMapData.length; i += 80) {
    battleMap.push(battleNPCMapData.slice(i, 80 + i))
}

const npc1Map = [] 
for (let i = 0; i < npc1MapData.length; i += 80) {
    npc1Map.push(npc1MapData.slice(i, 80 + i))
}

const npc2Map = [] 
for (let i = 0; i < npc2MapData.length; i += 80) {
    npc2Map.push(npc2MapData.slice(i, 80 + i))
}

const npc3Map = [] 
for (let i = 0; i < npc3MapData.length; i += 80) {
    npc3Map.push(npc3MapData.slice(i, 80 + i))
}

const npc4Map = [] 
for (let i = 0; i < npc4MapData.length; i += 80) {
    npc4Map.push(npc4MapData.slice(i, 80 + i))
}

const npc5Map = [] 
for (let i = 0; i < npc5MapData.length; i += 80) {
    npc5Map.push(npc5MapData.slice(i, 80 + i))
}

const npc6Map = [] 
for (let i = 0; i < npc6MapData.length; i += 80) {
    npc6Map.push(npc6MapData.slice(i, 80 + i))
}

const npc7Map = [] 
for (let i = 0; i < npc7MapData.length; i += 80) {
    npc7Map.push(npc7MapData.slice(i, 80 + i))
}

const enemy2Map = [] 
for (let i = 0; i < enemy2MapData.length; i += 80) {
    enemy2Map.push(enemy2MapData.slice(i, 80 + i))
}

const enemy3Map = [] 
for (let i = 0; i < enemy3MapData.length; i += 80) {
    enemy3Map.push(enemy3MapData.slice(i, 80 + i))
}

const enemy4Map = [] 
for (let i = 0; i < enemy4MapData.length; i += 80) {
    enemy4Map.push(enemy4MapData.slice(i, 80 + i))
}

const enemy5Map = [] 
for (let i = 0; i < enemy5MapData.length; i += 80) {
    enemy5Map.push(enemy5MapData.slice(i, 80 + i))
}

const enemy6Map = [] 
for (let i = 0; i < enemy6MapData.length; i += 80) {
    enemy6Map.push(enemy6MapData.slice(i, 80 + i))
}





const boundaries = []
const offset = {
    x: -50,
    y: -800
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            boundaries.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const battleZone = []

battleMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            battleZone.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const enemy2 = []

enemy2Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            enemy2.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const enemy3 = []

enemy3Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            enemy3.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const enemy4 = []

enemy4Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            enemy4.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const enemy5 = []

enemy5Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            enemy5.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const enemy6 = []

enemy6Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            enemy6.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const npc1 = []

npc1Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            npc1.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const npc2 = []

npc2Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            npc2.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const npc3 = []

npc3Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            npc3.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const npc4 = []

npc4Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            npc4.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const npc5 = []

npc5Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            npc5.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const npc6 = []

npc6Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            npc6.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})

const npc7 = []

npc7Map.forEach((row, i) => {
    row.forEach((symbol, j) => {
        if (symbol === 901)
            npc7.push(   
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                }
            })
        )
    })
})


//loading images
const image = new Image()
image.src = './img/GameMap.png'

const foregroundImage = new Image()
foregroundImage.src = './img/ForegroundObjects.png'

const playerImage = new Image()
playerImage.src = './img/PlayerWalking.png'

const playerIdleImage = new Image()
playerIdleImage.src = './img/PlayerIdle.png'

const playerReverseImage = new Image()
playerReverseImage.src = './img/PlayerWalkingReverse.png'

const playerReverseIdleImage = new Image()
playerReverseIdleImage.src = './img/PlayerIdleReverse.png'

const NpcImage = new Image()
NpcImage.src = './img/Npc.png'

const player = new Sprite({
    position: {
        x: canvas.width/2 - 104/2,
        y: canvas.height/2 - 208/2
    },
    image: playerImage,
    frames: {
        max: 6
    },
    sprites: {
        idle: playerIdleImage,
        reverse: playerReverseImage,
        walk: playerImage,
        reverseIdle: playerReverseIdleImage
    },
    hitboxOffset: { x:30, y:20},
    hitboxSize: {width: 35, height: 80}
})

const background = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    },
    image: image
})

const npc = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    },
    image: NpcImage
})

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y,
    },
    image: foregroundImage
})

const keys = {
    w: {
        pressed: false
    },
    s: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    e: {
        pressed: false
    }
}



const movables = [background, ...boundaries, foreground, ...battleZone, npc, ...npc1, ...npc2, ...npc3, ...npc4, ...npc5, ...npc6, ...npc7, ...enemy2, ...enemy3, ...enemy4, ...enemy5, ...enemy6]

function rectangularCollision({rectangle1, rectangle2}) {
    const hitbox1 = rectangle1.getHitbox()
    const hitbox2 = rectangle2

    return (
        hitbox1.position.x + hitbox1.width >= hitbox2.position.x &&
        hitbox1.position.x <= hitbox2.position.x + hitbox2.width &&
        hitbox1.position.y <= hitbox2.position.y + hitbox2.height &&
        hitbox1.position.y + hitbox1.height >= hitbox2.position.y
    )
}

let horizontaldirection = 'right'


const battle = {
    initiated: false
}

function animate() {
    const animationId = window.requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.draw()
    boundaries.forEach(boundary => {
        boundary.draw()
    })
    battleZone.forEach(battleZones => {
        battleZones.draw()
    })
    enemy2.forEach(enemy2 => {
        enemy2.draw()
    })
    enemy3.forEach(enemy3 => {
        enemy3.draw()
    })
    enemy4.forEach(enemy4 => {
        enemy4.draw()
    })
    enemy5.forEach(enemy5 => {
        enemy5.draw()
    })
    enemy6.forEach(enemy6 => {
        enemy6.draw()
    })
    npc1.forEach(NPC1 => {
        NPC1.draw()
    })
    npc2.forEach(NPC2 => {
        NPC2.draw()
    })
    npc3.forEach(NPC3 => {
        NPC3.draw()
    })
    npc3.forEach(NPC3 => {
        NPC3.draw()
    })
    npc4.forEach(NPC4 => {
        NPC4.draw()
    })
    npc5.forEach(NPC5 => {
        NPC5.draw()
    })
    npc6.forEach(NPC6 => {
        NPC6.draw()
    })
    npc7.forEach(NPC7 => {
        NPC7.draw()
    })
    npc.draw()
    player.draw()
    foreground.draw()
    
    
    let moving = true
    player.moving = false

    if (battle.initiated) return

    audio.battletheme.stop()

// activating a battle/interaction
    if (keys.e.pressed) {
        for (let i = 0; i < npc1.length; i++) {
            const NPC1 = npc1[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...NPC1,
                        position: {
                            x: NPC1.position.x,
                            y: NPC1.position.y + 3
                        }
                    }
                })
            )   {
                    document.querySelector('#MapUI').style.display = 'block';
                    document.querySelector('#interactionBox').style.display = 'block';
                    document.querySelector('#interactionBox').innerHTML = 'Jimmy: You know, it\'s funny... there are certain things we just accept as part of life. Take our communication, for example. Most of us just trust that our inbox will only show the important things. But it wasn\'t always this way, was it? A little extra sifting through nonsense was once the norm, until someone or something figured out how to keep that clutter out. Makes you wonder, doesn\'t it? What else has quietly been helping us every day without us even noticing. \n \n(Click to close)';
                    
                    document.querySelector('#MapUi').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none';
                        console.log('clicked dialogue');
                    
                    });
                break
            }
             
        }
        for (let i = 0; i < npc2.length; i++) {
            const NPC2 = npc2[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...NPC2,
                        position: {
                            x: NPC2.position.x,
                            y: NPC2.position.y + 3
                        }
                    }
                })
            )   {
                    document.querySelector('#MapUI').style.display = 'block';
                    document.querySelector('#interactionBox').style.display = 'block';
                    document.querySelector('#interactionBox').innerHTML = 'Dr. Al Gorithm: Psst... hey... You didn\'t hear this from me, but I\'ve heard that around here, there are six allegedly brainwashed individuals who have been controlled by their AI Microwave from NeuroWave Industries. Never trusted them, but that aside. You seem more than capable enough, I think... Could you perhaps put a stop to this, I heard they are planning to control more people, who knows how much time we have before the whole city is taken over by AI. Don\'t worry, I heard all you need to do is to answer some security questions and turn them off, but be careful, they are not going to make it easy for you. You may need some help from others as well.'
                    
                    document.querySelector('#MapUi').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none';
                        console.log('clicked dialogue');
                    
                    });
                break
            }
             
        }
        for (let i = 0; i < npc3.length; i++) {
            const NPC3 = npc3[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...NPC3,
                        position: {
                            x: NPC3.position.x,
                            y: NPC3.position.y + 3
                        }
                    }
                })
            )   {
                    document.querySelector('#MapUI').style.display = 'block';
                    document.querySelector('#interactionBox').style.display = 'block';
                    document.querySelector('#interactionBox').innerHTML = 'Timmy: Hiya! You know, those talking gadgets, like the ones in the big shiny cities, they get all confused if you don\'t tell \'em what you mean. Like, if I say, \'Bring me the thingy!\' they just go, \'Huh?\' You gotta say it just right! They\'re kinda like me when I can\'t find my toys! Hehe, silly, right?\n(Click to close)';
                    
                    document.querySelector('#MapUi').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none';
                        console.log('clicked dialogue');
                    
                    });
                break
            }
             
        }
        for (let i = 0; i < npc4.length; i++) {
            const NPC4 = npc4[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...NPC4,
                        position: {
                            x: NPC4.position.x,
                            y: NPC4.position.y + 3
                        }
                    }
                })
            )   {
                    document.querySelector('#MapUI').style.display = 'block';
                    document.querySelector('#interactionBox').style.display = 'block';
                    document.querySelector('#interactionBox').innerHTML = 'Kyle: Yo, what\'s up? I heard that AI has been causing some problems in the city. I was hoping to stay far away from it. But anyway, that got me thinking... So, you know those AI doodads that make crazy art? Like, BOOM realistic sunsets, dragons, whatever you want? Yeah, they don\'t just, like, copy stuff, dude. Nah, they\'re like... pattern ninjas, okay? They check out tons of pics and learn what\'s what. You say \'giant pizza castle\'? Bam, it\'s art time! Crazy, right?\n(Click to close)';
                    
                    document.querySelector('#MapUi').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none';
                        console.log('clicked dialogue');
                    
                    });
                break
            }
             
        }
        for (let i = 0; i < npc5.length; i++) {
            const NPC5 = npc5[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...NPC5,
                        position: {
                            x: NPC5.position.x,
                            y: NPC5.position.y + 3
                        }
                    }
                })
            )   {
                    document.querySelector('#MapUI').style.display = 'block';
                    document.querySelector('#interactionBox').style.display = 'block';
                    document.querySelector('#interactionBox').innerHTML = 'Kevin.: Oh, hey there. What? The hat? Oh, uh... yeah, I know. My niece dared me to wear it and I just kinda... kept it on. You might have seen him around here wearing the same... Anyway, you\'re probably here for some advice, right? Lemme tell you something weird I learned: those AI chatbots everyone loves? Yeah, they can\'t feel anything. Like, at all. They just fake it-\like how I pretend to enjoy wearing this thing when people laugh. It\'s all about putting on a show, right? Anyway, good luck with whatever you\'re doin\'.\n(Click to close)';
                    
                    document.querySelector('#MapUi').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none';
                        console.log('clicked dialogue');
                    
                    });
                break
            }
             
        }
        for (let i = 0; i < npc6.length; i++) {
            const NPC6 = npc6[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...NPC6,
                        position: {
                            x: NPC6.position.x,
                            y: NPC6.position.y + 3
                        }
                    }
                })
            )   {
                    document.querySelector('#MapUI').style.display = 'block';
                    document.querySelector('#interactionBox').style.display = 'block';
                    document.querySelector('#interactionBox').innerHTML = 'Layla: Hmm... have you noticed something strange about this place? How everyone looks so... similar. Same clothes, same faces... like someone copy-pasted them from the same template. It\'s like they were made in a rush or something. Oh! That reminds me, AI sometimes messes up for the same reason. If it learns from biased or incomplete stuff, it just keeps repeating mistakes. Weird, huh? Anyway, maybe it\s just me. Or maybe we\'re all part of something bigger... ooo, mysterious, right? Heh.\n(Click to close)';
                    
                    document.querySelector('#MapUi').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none';
                        console.log('clicked dialogue');
                    
                    });
                break
            }
                for (let i = 0; i < npc5.length; i++) {
            const NPC6 = npc6[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...NPC6,
                        position: {
                            x: NPC6.position.x,
                            y: NPC6.position.y + 3
                        }
                    }
                })
            )   {
                    document.querySelector('#MapUI').style.display = 'block';
                    document.querySelector('#interactionBox').style.display = 'block';
                    document.querySelector('#interactionBox').innerHTML = 'Layla: Hmm... have you noticed something strange about this place? How everyone looks so... similar. Same clothes, same faces... like someone copy-pasted them from the same template. It\'s like they were made in a rush or something. Oh! That reminds me, AI sometimes messes up for the same reason. If it learns from biased or incomplete stuff, it just keeps repeating mistakes. Weird, huh? Anyway, maybe it\s just me. Or maybe we\'re all part of something bigger... ooo, mysterious, right? Heh.\n(Click to close)';
                    
                    document.querySelector('#MapUi').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none';
                        console.log('clicked dialogue');
                    
                    });
                break
            }
             
        }
        }
        for (let i = 0; i < npc7.length; i++) {
            const NPC7 = npc7[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...NPC7,
                        position: {
                            x: NPC7.position.x,
                            y: NPC7.position.y + 3
                        }
                    }
                })
            )   {
                    document.querySelector('#MapUI').style.display = 'block';
                    document.querySelector('#interactionBox').style.display = 'block';
                    document.querySelector('#interactionBox').innerHTML = 'Barry: Hey, what\'s up? Oh, yeah, I know, I\'m half-naked. Don\'t worry about it. It\'s called freedom, my friend. Anyway, speaking of keeping things private-when you\'re using those fancy AI apps, ever wonder what they\'re doing with your data? Here\'s a pro tip from ol\' Barry: read the privacy policy. Yeah, I know, boring. But trust me, you don\'t wanna share more than you mean to. Kinda like me showing up to a wedding like this... but with your data. Get it? Cool. Stay sharp!\n(Click to close)';
                    
                    document.querySelector('#MapUi').addEventListener('click', (e) => {
                        e.currentTarget.style.display = 'none';
                        console.log('clicked dialogue');
                    
                    });
                break
            }
             
        }
        
        if (keys.e.pressed) {
            // Retrieve defeated enemies from local storage
            const defeatedEnemies = JSON.parse(localStorage.getItem('defeatedEnemies')) || [];
        
            // Battle Zone Interactions
            for (let i = 0; i < battleZone.length; i++) {
                const battleZones = battleZone[i];
        
                // Skip interaction if the battle zone is defeated
                if (defeatedEnemies.includes('battleZone')) {
                    console.log('Battle zone interaction skipped (already defeated).');
                    break;
                }
        
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...battleZones,
                            position: {
                                x: battleZones.position.x,
                                y: battleZones.position.y + 3,
                            },
                        },
                    })
                ) {
                    console.log('Activate battle with battle zone');
                    localStorage.setItem('currentEnemy', 'battleZone');
        
                    window.cancelAnimationFrame(animationId);
                    audio.maptheme.stop();
                    audio.initbattle.play();
                    audio.battletheme.play();
        
                    battle.initiated = true;
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.4,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.4,
                                onComplete() {
                                    resetBattle();
                                    animateBattle();
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.4,
                                    });
                                },
                            });
                        },
                    });
                    break;
                }
            }
        
            // Enemy2 Interactions
            for (let i = 0; i < enemy2.length; i++) {
                const Enemy2 = enemy2[i];
        
                // Skip interaction if enemy2 is defeated
                if (defeatedEnemies.includes('enemy2')) {
                    console.log('Enemy2 interaction skipped (already defeated).');
                    break;
                }
        
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...Enemy2,
                            position: {
                                x: Enemy2.position.x,
                                y: Enemy2.position.y + 3,
                            },
                        },
                    })
                ) {
                    console.log('Activate battle with enemy2');
                    localStorage.setItem('currentEnemy', 'enemy2');
        
                    window.cancelAnimationFrame(animationId);
                    audio.maptheme.stop();
                    audio.initbattle.play();
                    audio.battletheme.play();
        
                    battle.initiated = true;
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.4,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.4,
                                onComplete() {
                                    resetBattle();
                                    animateBattle();
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.4,
                                    });
                                },
                            });
                        },
                    });
                    break;
                }
            }

            for (let i = 0; i < enemy3.length; i++) {
                const Enemy3 = enemy3[i];
        
                // Skip interaction if enemy3 is defeated
                if (defeatedEnemies.includes('enemy3')) {
                    console.log('Enemy3 interaction skipped (already defeated).');
                    break;
                }
        
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...Enemy3,
                            position: {
                                x: Enemy3.position.x,
                                y: Enemy3.position.y + 3,
                            },
                        },
                    })
                ) {
                    console.log('Activate battle with enemy3');
                    localStorage.setItem('currentEnemy', 'enemy3');
        
                    window.cancelAnimationFrame(animationId);
                    audio.maptheme.stop();
                    audio.initbattle.play();
                    audio.battletheme.play();
        
                    battle.initiated = true;
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.4,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.4,
                                onComplete() {
                                    resetBattle();
                                    animateBattle();
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.4,
                                    });
                                },
                            });
                        },
                    });
                    break;
                }
            }

            for (let i = 0; i < enemy4.length; i++) {
                const Enemy4 = enemy4[i];
        
                // Skip interaction if enemy4 is defeated
                if (defeatedEnemies.includes('enemy4')) {
                    console.log('Enemy4 interaction skipped (already defeated).');
                    break;
                }
        
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...Enemy4,
                            position: {
                                x: Enemy4.position.x,
                                y: Enemy4.position.y + 3,
                            },
                        },
                    })
                ) {
                    console.log('Activate battle with enemy4');
                    localStorage.setItem('currentEnemy', 'enemy4');
        
                    window.cancelAnimationFrame(animationId);
                    audio.maptheme.stop();
                    audio.initbattle.play();
                    audio.battletheme.play();
        
                    battle.initiated = true;
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.4,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.4,
                                onComplete() {
                                    resetBattle();
                                    animateBattle();
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.4,
                                    });
                                },
                            });
                        },
                    });
                    break;
                }
            }

            for (let i = 0; i < enemy5.length; i++) {
                const Enemy5 = enemy5[i];
        
                // Skip interaction if enemy5 is defeated
                if (defeatedEnemies.includes('enemy5')) {
                    console.log('Enemy5 interaction skipped (already defeated).');
                    break;
                }
        
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...Enemy5,
                            position: {
                                x: Enemy5.position.x,
                                y: Enemy5.position.y + 3,
                            },
                        },
                    })
                ) {
                    console.log('Activate battle with enemy5');
                    localStorage.setItem('currentEnemy', 'enemy5');
        
                    window.cancelAnimationFrame(animationId);
                    audio.maptheme.stop();
                    audio.initbattle.play();
                    audio.battletheme.play();
        
                    battle.initiated = true;
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.4,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.4,
                                onComplete() {
                                    resetBattle();
                                    animateBattle();
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.4,
                                    });
                                },
                            });
                        },
                    });
                    break;
                }
            }

            for (let i = 0; i < enemy6.length; i++) {
                const Enemy6 = enemy6[i];
        
                // Skip interaction if enemy6 is defeated
                if (defeatedEnemies.includes('enemy6')) {
                    console.log('Enemy6 interaction skipped (already defeated).');
                    break;
                }
        
                if (
                    rectangularCollision({
                        rectangle1: player,
                        rectangle2: {
                            ...Enemy6,
                            position: {
                                x: Enemy6.position.x,
                                y: Enemy6.position.y + 3,
                            },
                        },
                    })
                ) {
                    console.log('Activate battle with enemy6');
                    localStorage.setItem('currentEnemy', 'enemy6');
        
                    window.cancelAnimationFrame(animationId);
                    audio.maptheme.stop();
                    audio.initbattle.play();
                    audio.battletheme.play();
        
                    battle.initiated = true;
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        repeat: 3,
                        yoyo: true,
                        duration: 0.4,
                        onComplete() {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                duration: 0.4,
                                onComplete() {
                                    resetBattle();
                                    animateBattle();
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        duration: 0.4,
                                    });
                                },
                            });
                        },
                    });
                    break;
                }
            }
        }
        
    }

//player movement and boundary detection

    if (keys.w.pressed && lastkey === 'w') {
        player.moving = true
        if (horizontaldirection === 'left' && player.image !== player.sprites.reverse) {
            player.image = player.sprites.reverse
            player.frames.max = 6   
        }
        if (horizontaldirection === 'right' && player.image !== player.sprites.walk) {
            player.image = player.sprites.walk
            player.frames.max = 6
        }
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })
            )   {
                moving = false
                break
            } 
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.y += 3
            })
    } else if (keys.s.pressed && lastkey === 's') {
        player.moving = true
        if (horizontaldirection === 'left' && player.image !== player.sprites.reverse) {
            player.image = player.sprites.reverse
            player.frames.max = 6
        }
        if (horizontaldirection === 'right' && player.image !== player.sprites.walk) {
            player.image = player.sprites.walk
            player.frames.max = 6
        }
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            )   {
                moving = false
                break
            } 
        }
        
        if (moving)
            movables.forEach((movable) => {
                movable.position.y -= 3
            })
    } else if (keys.a.pressed && lastkey === 'a') {
        player.moving = true
        horizontaldirection = 'left'
        if (player.image !== player.sprites.reverse) {
            player.image = player.sprites.reverse
            player.frames.max = 6
        }
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })
            )   {
                moving = false
                break
            } 
        }
        
        if (moving)
            movables.forEach((movable) => {
                movable.position.x += 3
            })
    } else if (keys.d.pressed && lastkey === 'd') {
        player.moving = true
        horizontaldirection = 'right'
        if (player.image !== player.sprites.walk) {
            player.image = player.sprites.walk
            player.frames.max = 6
        }
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }
                    }
                })
            )   {
                moving = false
                break
            } 
        }
        
        if (moving)
            movables.forEach((movable) => {
                movable.position.x -= 3
            })
    } else {
        if (horizontaldirection === 'right' && player.image !== player.sprites.idle) {
            player.image = player.sprites.idle;
            player.frames.max = 2
            player.frames.val = 0
        } else if (horizontaldirection === 'left' && player.image !== player.sprites.reverseIdle) {
            player.image = player.sprites.reverseIdle
            player.frames.max = 2
            player.frames.val = 0
        }
    }
}


//Listen for event > Whenever specific key is pressed, call specific function
let lastkey = ''
window.addEventListener('keydown', (e)=> {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastkey = 'w'
            break
        case 's':
            keys.s.pressed = true
            lastkey = 's'
            break
        case 'a':
            keys.a.pressed = true
            lastkey = 'a'
            break
        case 'd':
            keys.d.pressed = true
            lastkey = 'd'
            break
        case 'e':
            keys.e.pressed = true
            lastkey = 'e'
            break
    }
})


window.addEventListener('keyup', (e)=> {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break 
        case 'e':
            keys.e.pressed = false
            break 
    }
})
