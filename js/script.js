let patient = [];
const hamburgerMenu =document.getElementById('hamburger-menu');
const exit =document.getElementById('exit');
const nav =document.getElementById('nav');
const getStarted =document.getElementById('get-started');
const registerUser =document.getElementById('register-user');
const questionContainer =document.getElementById('question-container');
const questionBody =document.getElementById('question-body');


hamburgerMenu.addEventListener('click',()=>{    
    nav.classList.toggle('hidden');
})

exit.addEventListener('click',()=>{    
    nav.classList.toggle('hidden');
})

registerUser.addEventListener('click',(e)=>{
    e.preventDefault();
    getStarted.dispatchEvent(new Event('click'))    
})
getStarted.addEventListener('click',()=>{
    questionBody.innerHTML = `
            <p class="question-text">Select your gender identity?</p>                
            <ul class="question-items">
                <li class="question-item">
                    <button class="btn btn-gender" id="gender-male">Male</button>
                </li>
                <li class="question-item">
                    <button class="btn btn-gender" id="gender-female">Female</button>
                </li>
                <li class="question-item">
                    <button class="btn btn-gender" id="gender-nottosay">Prefer not to say</button>
                </li>
                <li class="question-item">
                    <button class="btn btn-gender" id="gender-other">Other</button>
                </li>
            </ul>`
    questionContainer.style.display = "inline";
})

/*
try to find any more sufficient way to catch (select) elements
that are addd latter (dynamically added elements) */
document.addEventListener("click", function(e){
    console.log(patient)

    if(e.target.closest("#question-cancel-btn")){      
        questionContainer.style.display = "none";
    }
    const btnGender = e.target.closest(".btn-gender");
    if(btnGender){
        patient['gender'] = btnGender.innerHTML;
        btnGender.addEventListener('click',()=>{
            questionBody.innerHTML = `<p class="question-text">Type your age?</p>
                                            <input 
                                            type="number" 
                                            name="age" 
                                            id="age" 
                                            class="question-input"
                                            placeholder="Type your age">
                                            <button class="btn btn-next" id="btn-age">Next</button>`            
        })
    }
    const btnAge = e.target.closest("#btn-age");
        
    if(btnAge){
            btnAge.addEventListener('click',(ev)=>{
                ev.preventDefault();                    
                const age = document.getElementById('age').value;
                if(age!="" && !isNaN(age)){               
                    patient['age'] = age;                        
                    questionBody.innerHTML = `
                            <p class="question-text">Select your marital status?</p>
                            <ul class="question-items">
                                <li class="question-item">
                                    <button class="btn btn-marital-status" id="single">Single</button>
                                </li>
                                <li class="question-item">
                                    <button class="btn btn-marital-status" id="married">Married</button>
                                </li>
                                <li class="question-item">
                                    <button class="btn btn-marital-status" id="divorced">Divorced</button>
                                </li>
                                <li class="question-item">
                                    <button class="btn btn-marital-status" id="widow">Widow</button>
                                </li>
                                <li class="question-item">
                                    <button class="btn btn-marital-status" id="nottosay">Prefer not to say</button>
                                </li>
                            </ul>`
                }
            })
        }

        const btnMaritalStatus = e.target.closest(".btn-marital-status");
        if(btnMaritalStatus){
            btnMaritalStatus.addEventListener('click',()=>{
                patient['marital_status'] = btnMaritalStatus.innerHTML;
                questionBody.innerHTML = `
                                            <p class="question-text">Select your religion?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-religion" id="islam">Islam</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-religion" id="christianity">Christianity</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-religion" id="jewish">Jewish</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-religion" id="hindu">Hindu</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-religion" id="other">Other</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-religion" id="none_believer">None Believer</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-religion" id="nottosay">Prefer not to say</button>
                                                </li>
                                            </ul>`
            })
        }
        const btnReligion = e.target.closest(".btn-religion");
        if(btnReligion){
            btnReligion.addEventListener('click',()=>{
                patient['religion'] = btnReligion.innerHTML;
                questionBody.innerHTML = `<p class="question-text">Do you want religious support?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-religious-support" id="yes">Yes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-religious-support" id="no">No</button>
                                                </li>                    
                                            </ul>`
            })
        }

        const btnReligiousSupport = e.target.closest(".btn-religious-support");
        if(btnReligiousSupport){
            btnReligiousSupport.addEventListener('click',()=>{
                patient['religious_support'] = btnReligiousSupport.innerHTML;
                questionBody.innerHTML = `<p class="question-text">Do you live with your family member?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-with-family" id="yes">Yes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-with-family" id="partially">Partially Yes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-with-family" id="no">No</button>
                                                </li>                    
                                            </ul>`
            })
        }

        const btnWithFamily = e.target.closest(".btn-with-family");
        if(btnWithFamily){
            btnWithFamily.addEventListener('click',()=>{
                patient['with_family'] = btnWithFamily.innerHTML;
                questionBody.innerHTML = `<p class="question-text">Do you feel save?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-fell-save" id="yes">Yes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-fell-save" id="partially">Partially Yes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-fell-save" id="no">No</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-fell-save" id="don't know">I don't know</button>
                                                </li>                    
                                            </ul>`
            })
        }

        const btnFellSave = e.target.closest(".btn-fell-save");
        if(btnFellSave){
            btnFellSave.addEventListener('click',()=>{
                patient['fell_save'] = btnFellSave.innerHTML;
                questionBody.innerHTML = `<p class="question-text">Where do you live?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-live-country" id="origin">Country of Origin</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-live-country" id="third">Third Country</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-live-country" id="destination">Destination Country</button>
                                                </li>
                                            </ul>`
            })
        }

        const btnLiveCountry = e.target.closest(".btn-live-country");
        if(btnLiveCountry){
            btnLiveCountry.addEventListener('click',()=>{
                patient['living_country'] = btnLiveCountry.innerHTML;
                questionBody.innerHTML = `<p class="question-text">Do you have permanent shelter?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-shelter" id="camp">I live in a camp/ refugees tent</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-shelter" id="temporary_shelter">I live in a temporary shelter</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-shelter" id="permanent">I live in a permanent appartment</button>
                                                </li>
                                            </ul>`
            })
        }

        const btnShelter = e.target.closest(".btn-shelter");
        if(btnShelter){
            btnShelter.addEventListener('click',()=>{
                patient['shelter'] = btnShelter.innerHTML;
                questionBody.innerHTML =   `<p class="question-text">Do you have any case as asylum seeker in any country?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-asylum-seeker" id="under_process">Yes - Under Process</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-asylum-seeker" id="completed">Yes- Already completed</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-asylum-seeker" id="no">No</button>
                                                </li>
                                            </ul>`
            })
        }

        const btnAsylumSeeker = e.target.closest(".btn-asylum-seeker");
        if(btnAsylumSeeker){
            btnAsylumSeeker.addEventListener('click',()=>{
                patient['asylum_seeker'] = btnAsylumSeeker.innerHTML;
                questionBody.innerHTML =   `<p class="question-text">Do you have language difficulties in communication?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-language-difficulties" id="yes">Yes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-language-difficulties" id="sometimes">Sometimes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-language-difficulties" id="no">No</button>
                                                </li>
                                            </ul>`                    
            })
        }
        
        const btnLanguageDifficulties = e.target.closest(".btn-language-difficulties");
        if(btnLanguageDifficulties){
            btnLanguageDifficulties.addEventListener('click',()=>{
                patient['language_difficulties'] = btnLanguageDifficulties.innerHTML;
                questionBody.innerHTML =   `<p class="question-text">Have you ever participated to any language course in country you are?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-language-course" id="yes">Yes</button>
                                                </li>                                        
                                                <li class="question-item">
                                                    <button class="btn btn-language-course" id="no">No</button>
                                                </li>
                                            </ul>`                    
            })
        }
        
        const btnLanguageCourse = e.target.closest(".btn-language-course");
        if(btnLanguageCourse){
            btnLanguageCourse.addEventListener('click',()=>{
                patient['language_course'] = btnLanguageCourse.innerHTML;
                questionBody.innerHTML =   ` <p class="question-text">Do you fell cultural difficulties in country you live?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-cultural-difficulties" id="yes">Yes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-cultural-difficulties" id="sometimes">Sometimes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-cultural-difficulties" id="no">No</button>
                                                </li>
                                            </ul>`                    
            })
        }
        
        const btnCulturalDifficulties = e.target.closest(".btn-cultural-difficulties");
        if(btnCulturalDifficulties){
            btnCulturalDifficulties.addEventListener('click',()=>{
                patient['cultural_difficulties'] = btnCulturalDifficulties.innerHTML;
                questionBody.innerHTML =   ` <p class="question-text">Have you ever participated any cultural orientation program in country you live?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-cultural-orientation" id="yes">Yes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-cultural-orientation" id="no">No</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-cultural-orientation" id="dontwant">I don't want to participate</button>
                                                </li>                    
                                            </ul>`                    
            })
        }
        
        const btnCulturalOrientation = e.target.closest(".btn-cultural-orientation");
        if(btnCulturalOrientation){
            btnCulturalOrientation.addEventListener('click',()=>{
                patient['cultural_orientation'] = btnCulturalOrientation.innerHTML;
                questionBody.innerHTML =   `<p class="question-text">Are you currently emloyeed?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-employement" id="yes">Yes</button>
                                                </li>                    
                                                <li class="question-item">
                                                    <button class="btn btn-employement" id="no">No</button>
                                                </li>            
                                            </ul>`                    
            })
        }
        const btnEmployement = e.target.closest(".btn-employement");
        if(btnEmployement){
            btnEmployement.addEventListener('click',()=>{
                patient['employement'] = btnEmployement.innerHTML;
                questionBody.innerHTML =   `<p class="question-text">How do you fell about your financial status?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-financial-status" id="exellent">Exellent</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-financial-status" id="good">Good</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-financial-status" id="fair">Fair</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-financial-status" id="bad">Bad</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-financial-status" id="terrible">Terrible</button>
                                                </li> 
                                            </ul>`                    
            })
        }

        const btnFinancialStatus = e.target.closest(".btn-financial-status");
        if(btnFinancialStatus){
            btnFinancialStatus.addEventListener('click',()=>{
                patient['financial_status'] = btnFinancialStatus.innerHTML;

                questionBody.innerHTML =   `<p class="question-text">Have you ever participated to any therapy?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-therapy-participation" id="yes">Yes</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-therapy-participation" id="no">No</button>
                                                </li>
                                            </ul>`                    
            })
        }
        
        const btnTherapyParticipation = e.target.closest(".btn-therapy-participation");
        if(btnTherapyParticipation){
            btnTherapyParticipation.addEventListener('click',()=>{
                patient['therapy_participation'] = btnTherapyParticipation.innerHTML;
                questionBody.innerHTML =   `<p class="question-text">What about your current consideration which leads you participate to therapy program?</p>
                                            <ul class="question-items">
                                                <li class="question-item">      
                                                    <input type="checkbox" id="current-concideration1" name="current-concideration1" class="conciderations" value="I feel depressed">
                                                    <label for="current-concideration1">I feel depressed</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="current-concideration2" name="current-concideration2"  class="conciderations" value="I feel life is nonsense and bored">
                                                    <label for="current-concideration2">I feel life is nonsense and bored</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="current-concideration3" name="current-concideration3"  class="conciderations" value="I lose my concentration">
                                                    <label for="current-concideration3">I lose my concentration</label>                    
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="current-concideration4" name="current-concideration4"  class="conciderations" value="I have experienced trauma">
                                                    <label for="current-concideration4">I have experienced trauma</label>
                                                    
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="current-concideration5" name="current-concideration5"  class="conciderations" value="I lose self-confidence">
                                                    <label for="current-concideration5">I lose self-confidence</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="current-concideration6" name="current-concideration6"  class="conciderations" value="I feel anxiety">
                                                    <label for="current-concideration6">I feel anxiety</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="current-concideration7" name="current-concideration7"  class="conciderations" value="I can not explain right now">
                                                    <label for="current-concideration7">I can not explain right now</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="current-concideration8" name="current-concideration8"  class="conciderations" value="I don't know">
                                                    <label for="current-concideration8">I don't know</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="current-concideration9" name="current-concideration9"  class="conciderations" value="Other">
                                                    <label for="current-concideration9">Other</label>                    
                                                </li>
                                            </ul>
                                            <button class="btn btn-next" id="btn-current-concideration">Next</button>`                    
            })
        }

        const btnCurrentConcideration = e.target.closest("#btn-current-concideration");
        if(btnCurrentConcideration){
            btnCurrentConcideration.addEventListener('click',()=>{
                const considerations = []
                document.querySelectorAll('input[class=conciderations]:checked').forEach(function(elem) {
                    considerations.push(elem.value)
                });                
                patient['current_consideration'] = considerations
                questionBody.innerHTML =   `<p class="question-text">How do you asses your physical health?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-physical-health" id="exellent">Exellent</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-physical-health" id="good">Good</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-physical-health" id="fair">Fair</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-physical-health" id="bad">Bad</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-physical-health" id="terrible">Terrible</button>
                                                </li> 
                                            </ul>`
            })
        }

        const btnPhysicalHealth = e.target.closest(".btn-physical-health");
        if(btnPhysicalHealth){
            btnPhysicalHealth.addEventListener('click',()=>{
                patient['physical_health'] = btnPhysicalHealth.innerHTML
                questionBody.innerHTML =   `<p class="question-text">Do you feel any chronic pain?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-chronic-pain" id="never">Never</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-chronic-pain" id="sometimes">Sometimes</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-chronic-pain" id="many times">Many times</button>
                                                </li>
                                            </ul>`
            })
        }

        const btnChronicPain = e.target.closest(".btn-chronic-pain");
        if(btnChronicPain){
            btnChronicPain.addEventListener('click',()=>{
                patient['chronic_pain'] = btnChronicPain.innerHTML
                questionBody.innerHTML =   `<p class="question-text">Have you ever thought about suciede?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-think-suciede" id="never">Never</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-think-suciede" id="sometimes">Sometimes</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-think-suciede" id="many times">Many times</button>
                                                </li>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-think-suciede" id="tried but not succeed">Tried but not succeed</button>
                                                </li>
                                            </ul>`
            })
        }

        const btnThinkSuciede = e.target.closest(".btn-think-suciede");
        if(btnThinkSuciede){
            btnThinkSuciede.addEventListener('click',()=>{
                patient['think_suciede'] = btnThinkSuciede.innerHTML
                questionBody.innerHTML =   `<p class="question-text">Do you have any addiction?</p>
                                            <ul class="question-items">
                                                <li class="question-item">
                                                    <button class="btn btn-addiction" id="yes">Yes</button>
                                                </li>
                                                <li class="question-item">
                                                    <button class="btn btn-addiction" id="no">No</button>
                                                </li>
                                            </ul>`
            })
        }

        const btnAddiction = e.target.closest(".btn-addiction");
        if(btnAddiction){
            btnAddiction.addEventListener('click',()=>{
                patient['addiction'] = btnAddiction.innerHTML
                if(patient['addiction']=="Yes"){
                    questionBody.innerHTML =   `<p class="question-text">What kind of addiction do you have? </p>
                                                <ul class="question-items">
                                                    <li class="question-item">
                                                        <input type="checkbox" id="addiction1" name="addiction1" class="addictions" value="Ciggarate">
                                                        <label for="addiction1">Ciggarate</label>
                                                    </li>
                                                    <li class="question-item">
                                                        <input type="checkbox" id="addiction2" name="addiction2" class="addictions" value="Snuff">
                                                        <label for="addiction2">Snuff</label>                    
                                                    </li>
                                                    <li class="question-item">      
                                                        <input type="checkbox" id="addiction3" name="addiction3" class="addictions" value="Alcohol">
                                                        <label for="addiction3">Alcohol</label>
                                                    </li>
                                                    <li class="question-item">
                                                        <input type="checkbox" id="addiction4" name="addiction4" class="addictions" value="Chemical/Narcotic Drug">
                                                        <label for="addiction4">Chemical/Narcotic Drug</label>
                                                    </li>                   
                                                    <li class="question-item">
                                                        <input type="checkbox" id="addiction5" name="addiction5" class="addictions" value="Other">
                                                        <label for="addiction5">Other</label>                    
                                                    </li>
                                                </ul>
                                                <button class="btn btn-next" id="btn-addiction-type">Next</button>`

                }else{
                    questionBody.innerHTML =   `<p class="question-text">Do you have any regular activities?</p>
                                                <ul class="question-items">
                                                    <li class="question-item">      
                                                        <input type="checkbox" id="activity1" name="activity1" class="activities" value="Sport activities">
                                                        <label for="activity1">Sport activities</label>
                                                    </li>
                                                    <li class="question-item">
                                                        <input type="checkbox" id="activity2" name="activity2" class="activities" value="Go to Cinema">
                                                        <label for="activity2">Go to Cinema</label>
                                                    </li>
                                                    <li class="question-item">
                                                        <input type="checkbox" id="activity3" name="activity3" class="activities" value="Watching movie at home">
                                                        <label for="activity3">Watching movie at home</label>                    
                                                    </li>
                                                    <li class="question-item">
                                                        <input type="checkbox" id="activity4" name="activity4" class="activities" value="Listening to music">
                                                        <label for="activity4">Listening to music</label>
                                                        
                                                    </li>
                                                    <li class="question-item">
                                                        <input type="checkbox" id="activity5" name="activity5" class="activities" value="Sight seeing">
                                                        <label for="activity5">Sight seeing</label>
                                                    </li>
                                                    <li class="question-item">
                                                        <input type="checkbox" id="activity6" name="activity6" class="activities" value="Reading book">
                                                        <label for="activity6">Reading book</label>
                                                    </li>
                                                    <li class="question-item">
                                                        <input type="checkbox" id="activity7" name="activity7" class="activities" value="Reading spiritual materials">
                                                        <label for="activity7">Reading spiritual materials</label>
                                                    </li>                   
                                                    <li class="question-item">
                                                        <input type="checkbox" id="activity8" name="activity8" class="activities" value="resting/sleeping">
                                                        <label for="activity8">Resting / Sleeping</label>
                                                    </li>
                                                    <li class="question-item">
                                                        <input type="checkbox" id="activity9" name="activity9" class="activities" value="Other activities">
                                                        <label for="activity9">Other activities</label>                    
                                                    </li>
                                                </ul>
                                                <button class="btn btn-next" id="btn-activity-type">Next</button>`
                }
            })
        }
        const btnAddictionType = e.target.closest("#btn-addiction-type");
        if(btnAddictionType){
            btnAddictionType.addEventListener('click',()=>{
                const AddictionType = []
                document.querySelectorAll('input[class=addictions]:checked').forEach(function(elem) {
                    AddictionType.push(elem.value)
                });                
                patient['addiction_type'] = AddictionType
                questionBody.innerHTML =   `<p class="question-text">Do you have any regular activities?</p>
                                            <ul class="question-items">
                                                <li class="question-item">      
                                                    <input type="checkbox" id="activity1" name="activity1" class="activities" value="Sport activities">
                                                    <label for="activity1">Sport activities</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="activity2" name="activity2" class="activities" value="Go to Cinema">
                                                    <label for="activity2">Go to Cinema</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="activity3" name="activity3" class="activities" value="Watching movie at home">
                                                    <label for="activity3">Watching movie at home</label>                    
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="activity4" name="activity4" class="activities" value="Listening to music">
                                                    <label for="activity4">Listening to music</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="activity5" name="activity5" class="activities" value="Sight seeing">
                                                    <label for="activity5">Sight seeing</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="activity6" name="activity6" class="activities" value="Reading book">
                                                    <label for="activity6">Reading book</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="activity7" name="activity7" class="activities" value="Reading spiritual materials">
                                                    <label for="activity7">Reading spiritual materials</label>
                                                </li>                   
                                                <li class="question-item">
                                                    <input type="checkbox" id="activity8" name="activity8" class="activities" value="resting/sleeping">
                                                    <label for="activity8">Resting / Sleeping</label>
                                                </li>
                                                <li class="question-item">
                                                    <input type="checkbox" id="activity9" name="activity9" class="activities" value="Other activities">
                                                    <label for="activity9">Other activities</label>                    
                                                </li>
                                            </ul>
                                            <button class="btn btn-next" id="btn-activity-type">Next</button>`

            })
        }

        const btnActivityType = e.target.closest("#btn-activity-type");
        if(btnActivityType){
            btnActivityType.addEventListener('click',()=>{
                const activities = []
                document.querySelectorAll('input[class=activities]:checked').forEach(function(elem) {
                    activities.push(elem.value)
                });                
                patient['activity_type'] = activities
                load_form();
                

            })
        }

        const btnSubmitForm = e.target.closest("#btn-submit-form");
        if(btnSubmitForm){
            btnSubmitForm.addEventListener('click',(e)=>{
                e.preventDefault();
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirm_password = document.getElementById('confirm_password').value;


                patient['email'] = email
                patient['password'] = password
                questionBody.innerHTML =   `<p class="question-text">Please check your email and confirm.</p>
                ${email}\n${password}\n${confirm_password}
                                            <button class="btn" id="btn-close">Close</button>`
            })
        }
        const btnClose = e.target.closest("#btn-close");
        if(btnClose){
            btnClose.addEventListener('click',()=>{                
                questionContainer.style.display = "none";
            })
        }



  });

function load_form(){
    questionBody.innerHTML =   `<p class="question-text">Enter your email and passwor to register?</p>
                                <form>
                                    <input type="email" name="email" id="email" placeholder="Email Address" class="question-input"/>
                                    <input type="password" name="password" id="password" placeholder="Password" class="question-input"/>
                                    <input type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" class="question-input"/>
                                    <button class="btn" id="btn-submit-form">Submit</button>
                                </form>`
} 
