const kotoJob = document.getElementById('kotogula-job');
// console.log(jobBtn);

let currenStatus = 'all';
function unicId(id){
    document.getElementById(id);
    currenStatus = id;
    // console.log(id);
}



// count section
const content = document.querySelector('#content');
const interviewArea = document.querySelector('#interview-area');
const rejectedArea = document.querySelector('#rejected-area');

const jobTotal = document.getElementById('all-job');
const totalInterview = document.getElementById('total-interview');
const totalRejected = document.getElementById('total-rejected');

const totalJob = content.children.length;
jobTotal.innerText = totalJob;
kotoJob.innerText = `${totalJob} jobs`;





//storage array

let allInterview = [];
let allRejected = [];



// main content click
    document.querySelector('main')
    .addEventListener('click', function(e){
    // const getValue = e.target.closest('.job-card');
    // if(!getValue) return;
    const getValue = e.target.parentNode.parentNode.parentNode;

    const interview = getValue.querySelector('.interview');
    const interviewBtn = getValue.querySelector('.interview-btn').innerText;
    const rejectBtn = getValue.querySelector('.reject-btn').innerText;
    const companyName = getValue.querySelector('.companyName').innerText;
    const description = getValue.querySelector('.description').innerText;
    const position = getValue.querySelector('.position').innerText;
    const companyDetails = getValue.querySelector('.company-details').innerText;
    
    // console.log(getValue)

    const cardArea = {
        interview: 'Interview',
        interviewBtn,
        rejectBtn,
        companyName,
        description,
        position,
        companyDetails
    }

    // interview clicked;
    if(e.target.classList.contains('interview-btn')){
        allRejected = allRejected.filter(item => item.companyName !== companyName);
        const exist = allInterview.find(item => item.companyName === companyName);
        
        if(!exist){
            allInterview.push(cardArea);
        }
        if(currenStatus === 'intview-btn'){
            renderInterview();
        }

        interview.innerText = 'Interveiw';
        interview.style.border = '1px solid #00a63e';
        interview.style.color = '#00a63e';
        interview.style.fontSize = '18px';
        interview.style.backgroundColor = 'white';

        renderInterview()
        renderRejected()
        // allDataCount()
    }

    // rejected clicked;
    if(e.target.classList.contains('reject-btn')){
        const exist = allRejected.find(item => item.companyName === companyName);
        allInterview = allInterview.filter(item => item.companyName !== companyName);
        
        if(!exist){
            allRejected.push(cardArea);
        }
          if(currenStatus === 'reject-btn'){
            renderRejected();
        }
        interview.innerText = 'Rejected';
        interview.style.color = '#fb2c36';
        interview.style.border = '1px solid #fb2c36';
        interview.style.fontSize = '18px';
        interview.style.backgroundColor = 'white';
        renderRejected()
        renderInterview()
        // allDataCount()
    }


});

    // Render fun interview and rejected

    function renderInterview(){
        interviewArea.innerHTML = '';
        if(allInterview.length === 0){
            interviewArea.innerHTML = `
            <div class="flex flex-col justify-center items-center py-20">
                <img src="./jobs.png" alt="">
                <div class="mt-4 text-center">
                    <h3 class="text-gray-800 font-semibold text-xl">No jobs available</h3>
                    <p class="text-gray-600">Check back soon for new job opportunities</p>
                </div>
            </div>
            `
            totalInterview.innerText = 0;
        }
        for(let interveiw of allInterview){
            const div = document.createElement('div');
            div.className = 'job-card bg-white px-5 py-5 rounded-lg text-gray-600 mb-5';
            div.innerHTML =    `
                <div class="flex gap-5 justify-between items-start">
                    <div>
                        <div>
                            <h3 class="companyName text-gray-800 font-semibold text-xl mb-3">${interveiw.companyName}</h3>
                            <p class="position">${interveiw.position}</p>
                            <p class="company-details">${interveiw.companyDetails}</p>
                        </div>

                        <button class="interview px-5 py-2 bg-white rounded-md my-3 cursor-pointer text-md font-semibold text-green-600 border border-y-green-600">Interview</button>

                        <div>
                            <p class="description">${interveiw.description}</p>
                            <button class="interview-btn px-5 py-2 rounded-md my-3 cursor-pointer text-sm font-semibold text-green-600 border border-green-600 mr-4 mt-5">INTERVIEW</button>
                            <button class="reject-btn px-5 py-2 rounded-md my-3 cursor-pointer text-sm font-semibold text-red-500 border border-red-500">REJECTED</button>
                        </div>
                    </div>
                    <button class="delete-btn text-red-500 border border-red-400 mt-5 px-2 py-3 rounded-md cursor-pointer"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `
            interviewArea.appendChild(div);
        }

        const interviewCount = allInterview.length;
        totalInterview.innerText = interviewCount;
        kotoJob.innerText = `${interviewCount} of ${totalJob} jobs`;

    }


    // Render fun interview and rejected

    function renderRejected(){
        rejectedArea.innerHTML = '';
        if(allRejected.length === 0){
            rejectedArea.innerHTML = `
            <div class="flex flex-col justify-center items-center py-20">
                <img src="./jobs.png" alt="">
                <div class="mt-4 text-center">
                    <h3 class="text-gray-800 font-semibold text-xl">No jobs available</h3>
                    <p class="text-gray-600">Check back soon for new job opportunities</p>
                </div>
            </div>
            `
            totalRejected.innerText = 0;
        }
        for(let rejected of allRejected){
            const div = document.createElement('div');
            div.className = 'job-card bg-white px-5 py-5 rounded-lg text-gray-600 flex gap-5 justify-between items-start mb-5';
            div.innerHTML =    `
                <div>
                    <div>
                        <h3 class="companyName text-gray-800 font-semibold text-xl mb-3">${rejected.companyName}</h3>
                        <p class="position">${rejected.position}</p>
                        <p class="company-details">${rejected.companyDetails}</p>
                    </div>

                    <button class="interview px-5 py-2 bg-white rounded-md my-3 cursor-pointer text-md font-semibold text-red-500 border border-red-500">Rejected</button>

                    <div>
                        <p class="description">${rejected.description}</p>
                        <button class="interview-btn px-5 py-2 rounded-md my-3 cursor-pointer text-sm font-semibold text-green-600 border border-green-600 mr-4 mt-5">INTERVIEW</button>
                        <button class="reject-btn px-5 py-2 rounded-md my-3 cursor-pointer text-sm font-semibold text-red-500 border border-red-500">REJECTED</button>
                    </div>
                </div>
                <button class="delete-btn text-red-500 border border-red-400 mt-5 px-2 py-3 rounded-md cursor-pointer"><i class="fa-solid fa-trash-can"></i></button>
            
            `
            rejectedArea.appendChild(div);
        }
        const rejectCount = allRejected.length;
        totalRejected.innerText = rejectCount;
        kotoJob.innerText = `${rejectCount} of ${totalJob} jobs`;

    }

// toggle button
// function unicId(id){
//     document.getElementById(id);
//     currenStatus = id;
//     console.log(id);
// }

document.getElementById('intview-btn')
.addEventListener('click', function(){
    interviewArea.classList.remove('hidden');
    rejectedArea.classList.add('hidden');
    content.classList.add('hidden');

});

document.getElementById('reject-btn')
.addEventListener('click', function(){
    interviewArea.classList.add('hidden');
    rejectedArea.classList.remove('hidden');
    content.classList.add('hidden');
});

document.getElementById('all-content-btn')
.addEventListener('click', function(){
    interviewArea.classList.add('hidden');
    rejectedArea.classList.add('hidden');
    content.classList.remove('hidden');
});


// all, reject and interview button
const jobBtn = document.getElementsByClassName('job-btn');
console.log(jobBtn);


function allDataCount(){
    jobTotal.innerText = totalJob;
    kotoJob.innerText = `${totalJob} jobs`;
}


const allContentBtn = document.getElementById('all-content-btn');
allContentBtn.addEventListener('click', function(){
    allContentBtn.style.backgroundColor = '#3498db';
    allContentBtn.style.color = 'white';
    interviewBtn.style.backgroundColor = '';
    interviewBtn.style.color = '';
    rejectBtn.style.backgroundColor = '';
    rejectBtn.style.color = '';
    allDataCount();
});
const interviewBtn  = document.getElementById('intview-btn');
interviewBtn.addEventListener('click', function(){
    interviewBtn.style.backgroundColor = '#3498db';
    interviewBtn.style.color = 'white';
    allContentBtn.style.backgroundColor = 'white';
    allContentBtn.style.color = 'black';
    rejectBtn.style.backgroundColor = '';
    rejectBtn.style.color = '';

    renderInterview();
});
const rejectBtn = document.getElementById('reject-btn');
rejectBtn.addEventListener('click', function(){
    rejectBtn.style.backgroundColor = '#3498db';
    rejectBtn.style.color = 'white';
    allContentBtn.style.backgroundColor = 'white';
    allContentBtn.style.color = 'black';
    interviewBtn.style.backgroundColor = '';
    interviewBtn.style.color = 'black';

    renderRejected();
});
