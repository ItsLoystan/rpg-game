    class Sprite {
        constructor({position, velocity, image, frames = {max:1}, hitboxOffset = { x: 0, y: 0 }, hitboxSize = { width: null, height: null }, sprites}) {
            this.position = position
            this.image = image
            this.frames = {...frames, val: 0, elapsed: 0}

            this.image.onload = () => {
                if (frames.horizontal) {
                    this.width = this.image.width / this.frames.max;
                    this.height = this.image.height;
                } else {
                    this.width = this.image.width;
                    this.height = this.image.height / this.frames.max;
                }
            }
            
            this.hitboxOffset = hitboxOffset
            this.hitboxSize = hitboxSize
            this.moving = false
            this.sprites = sprites
            this.opacity = 1

        }

        getHitbox() {
            return {
                position: {
                    x: this.position.x + this.hitboxOffset.x,
                    y: this.position.y + this.hitboxOffset.y
                },
                width: this.hitboxSize.width || this.width,
                height: this.hitboxSize.height || this.height
            }
        }

        draw() {
            const frameWidth = this.frames.horizontal ? this.width : this.image.width;
            const frameHeight = this.frames.horizontal ? this.image.height : this.height;
            
            c.save()
            c.globalAlpha = this.opacity
            c.drawImage(
                this.image,
                this.frames.horizontal ? this.frames.val * frameWidth : 0,
                this.frames.horizontal ? 0 : this.frames.val * frameHeight,
                frameWidth, 
                frameHeight,
                this.position.x,
                this.position.y,
                frameWidth,
                frameHeight
            ) 
            c.restore()
            

            if (this.frames.max > 1) {
                    this.frames.elapsed++
            }
            
            if (this.frames.elapsed % 20 === 0) {
                if (this.frames.val < this.frames.max - 1) this.frames.val++
                else this.frames.val = 0
            }
        }
    }

    class Chara extends Sprite {
        constructor({
            position,
            velocity,
            image,
            frames = { max: 1 },
            hitboxOffset = { x: 0, y: 0 },
            hitboxSize = { width: null, height: null },
            sprites,
            isEnemy = false,
            outcome, // outcome is here but it's redundant
            answers
        }) {
            super({
                position,
                velocity,
                image,
                frames,
                hitboxOffset,
                hitboxSize,
                sprites
            });
            this.health = 100;
            this.isEnemy = isEnemy;
            this.answers = answers;
        }
        faint() {
            audio.maptheme.play()
            document.querySelector('#dialogueBox').innerHTML = 'Battle Ended!';
            gsap.to(this.position, {
                y: this.position.y + 20
            })
            gsap.to(this, {
                opacity: 0
            })
        }
        
        answer({ answer, recipient, renderedSprites }) {
            document.querySelector('#dialogueBox').style.display = 'block'
            document.querySelector('#dialogueBox').innerHTML = 'Your answer is ' + answer.outcome;

            let healthBar = '#playerHealthBar'
            if (this.isEnemy) healthBar = '#enemyHealthBar'
            
            const tl = gsap.timeline()
            let movementDistance = 20
            if (this.isEnemy) movementDistance = -20
            this.health -= answer.damage

            switch (answer.name) {
                case 'Fitness trackers calculating calories burned':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break
                case 'Interacting with a customer service chatbot':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break   
                case 'Unlocking your smartphone with facial recognition':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break                     
                case 'Spam email filters':
                    audio.correct.play()
                    tl.to(this.position, {
                        x: this.position.x - movementDistance
                    })
                        .to(this.position, {
                        x: this.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(recipient.position, {
                                x: recipient.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(recipient, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(this.position, {
                        x: this.position.x
                    })
                break
                case 'Submitting AI-generated essays as your own work':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break
                case 'Using AI to paraphrase sources without citation':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break   
                case 'Relying solely on AI for research without human verification':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break                     
                case 'Using AI as a brainstorming tool and citing it as a source':
                    audio.correct.play()
                    tl.to(this.position, {
                        x: this.position.x - movementDistance
                    })
                        .to(this.position, {
                        x: this.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(recipient.position, {
                                x: recipient.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(recipient, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(this.position, {
                        x: this.position.x
                    })
                break                
                case 'The AI doesn\'t have enough internet speed':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break
                case 'The AI was not trained in your accent':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break   
                case 'The AI cannot process your voice in real time':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break                     
                case 'The AI lacks context about your intent':
                    audio.correct.play()
                    tl.to(this.position, {
                        x: this.position.x - movementDistance
                    })
                        .to(this.position, {
                        x: this.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(recipient.position, {
                                x: recipient.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(recipient, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(this.position, {
                        x: this.position.x
                    })
                break                
                case 'It copies existing art exactly':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break
                case 'It draws everything by hand':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break   
                case 'It uses pre-made templates for every image':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break                     
                case 'It analyzes patterns in huge datasets of images and text':
                    audio.correct.play()
                    tl.to(this.position, {
                        x: this.position.x - movementDistance
                    })
                        .to(this.position, {
                        x: this.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(recipient.position, {
                                x: recipient.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(recipient, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(this.position, {
                        x: this.position.x
                    })
                break                
                case 'They lack access to emotional vocabulary':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break
                case 'Emotions aren\'t data-driven processes':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break   
                case 'They\'re programmed to avoid emotional responses':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break                     
                case 'AI cannot experience consciousness or feelings':
                    audio.correct.play()
                    tl.to(this.position, {
                        x: this.position.x - movementDistance
                    })
                        .to(this.position, {
                        x: this.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(recipient.position, {
                                x: recipient.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(recipient, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(this.position, {
                        x: this.position.x
                    })
                break                
                case 'They run out of computing power':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break
                case 'They cannot process large datasets':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break   
                case 'They are programmed to intentionally make mistakes':
                    audio.wrong.play()
                    tl.to(Microwave.position, {
                        x: Microwave.position.x - movementDistance
                    })
                        .to(Microwave.position, {
                        x: Microwave.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(you.position, {
                                x: you.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(you, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(Microwave.position, {
                        x: Microwave.position.x
                    })
                    break                     
                case 'They rely on incomplete or biased training data':
                    audio.correct.play()
                    tl.to(this.position, {
                        x: this.position.x - movementDistance
                    })
                        .to(this.position, {
                        x: this.position.x + movementDistance * 2,
                        duration: 0.1,
                        onComplete: () => {
                            //enemy gets hit
                            audio.hit.play()
                            gsap.to(healthBar, {
                                width: this.health + '%'
                            })
        
                            gsap.to(recipient.position, {
                                x: recipient.position.x + 10,
                                yoyo: true,
                                repeat: 5,
                                duration: 0.08
                            })
        
                            gsap.to(recipient, {
                                opacity: 0,
                                repeat: 5,
                                yoyo: true,
                                duration: 0.08
                            })
                        }
                    }).to(this.position, {
                        x: this.position.x
                    })
                break                
                                                 
            }
            
        }

    }

    class Boundary {
        static width = 48
        static height = 48
        constructor({position}) {
            this.position = position
            this.width = 48
            this.height = 48
        }

        draw() {
            c.fillStyle = 'rgba(255, 0, 0, 0.0)'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
        }
    }

