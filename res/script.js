const state = {
    xmlDocObj:null,
    nodes:['player_name','sport_id','specialisation','join_date','salary','address','contact_no']
}


const loadXml = () => {
    let xhttp;
    if(window.XMLHttpRequest){
        xhttp = new XMLHttpRequest();
    }else{
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.onreadystatechange = function(){
        if(xhttp.readyState == 4 && xhttp.status == 200){
            showTable(xhttp.responseXML)
        }
    }

    xhttp.open('GET','samp.xml',true);
    xhttp.send();
}

const showTable = (xmlRes) => {
    if(!xmlRes){return;}
    state.xmlDocObj = xmlRes;
    let table;
    table = `<tr style='background:#4a3030;color:#fff;'>
        <th>player_name</th>
        <th>sport_id</th>
        <th>specialisation</th>
        <th>join_date</th>
        <th>salary</th>
        <th>address</th>
        <th>contact_no</th>
        <th>Actions</th>
        </tr>`;
    const x = xmlRes.getElementsByTagName("donor");
    for(let i=0;i<x.length;i++){
        table += `<form onsubmit="submitFormHandler()">
        <tr>
            <td>${xmlRes.getElementsByTagName("donor_name")[i].childNodes[0].nodeValue}</td>
            <td>${xmlRes.getElementsByTagName("donate_id")[i].childNodes[0].nodeValue}</td>
            <td>${xmlRes.getElementsByTagName("blood_grp")[i].childNodes[0].nodeValue}</td>
            <td>${xmlRes.getElementsByTagName("donate_date")[i].childNodes[0].nodeValue}</td>
            <td>${xmlRes.getElementsByTagName("quantity")[i].childNodes[0].nodeValue}</td>
            <td>${xmlRes.getElementsByTagName("address")[i].childNodes[0].nodeValue}</td>
            <td>${xmlRes.getElementsByTagName("contact_no")[i].childNodes[0].nodeValue}</td>
            <td id='edit_delete_cont_${i}'>
                <ion-icon name="pencil-outline" class="edit_icon" onclick="changeNode(${i})"></ion-icon>
                <ion-icon onclick="removeNode(${i})" name="trash-outline" class="delete_icon"></ion-icon>
            </td>
            <td id='submit_cancel_cont_${i}' class='hide'>
                <input type=submit><ion-icon type='submit' name="arrow-forward-circle-outline" class="edit_icon" style="color:green;"></ion-icon></submit>
                
                <ion-icon class="delete_icon" name="close-circle-outline"></ion-icon>
            </td>
            </tr>
        </form>`;
    }
    document.getElementById("member_table").innerHTML = table;
}

const removeNode = (id) => {
    if(id == null){return}
    let child = state.xmlDocObj.getElementsByTagName('donor')[id];
    state.xmlDocObj.documentElement.removeChild(child);
    showTable(state.xmlDocObj)
}

const changeNode = (id) => {
    if(id == null){return}
    document.getElementById("form_cont").classList.toggle('hide');
    const form = document.getElementById("changeForm");
    let formElem = `
    <input disabled class='input_fields' type='text' placeholder='Donor Name' value='${state.xmlDocObj.getElementsByTagName("donor_name")[id].childNodes[0].nodeValue}'/>
    <input disabled class='input_fields' type='text' placeholder='Donate Id' value='${state.xmlDocObj.getElementsByTagName("donate_id")[id].childNodes[0].nodeValue}'/>
    <input class='input_fields' type='text' placeholder=Blood Group' value='${state.xmlDocObj.getElementsByTagName("blood_grp")[id].childNodes[0].nodeValue}'/>
    <input class='input_fields' type='text' placeholder='Donate Date' value='${state.xmlDocObj.getElementsByTagName("donate_date")[id].childNodes[0].nodeValue}'/>
    <input class='input_fields' type='text' placeholder='Quantity' value='${state.xmlDocObj.getElementsByTagName("quantity")[id].childNodes[0].nodeValue}'/>
    <input class='input_fields' type='text' placeholder='Address' value='${state.xmlDocObj.getElementsByTagName("address")[id].childNodes[0].nodeValue}'/>
    <input class='input_fields' type='text' placeholder='Contact No' value='${state.xmlDocObj.getElementsByTagName("contact_no")[id].childNodes[0].nodeValue}'/>
    <div class='btn_cont'>
        <button class='submit_btn' type='submit' onclick='submitFormHandler(${id})'>Submit</button>
        <button class='cancel_btn' onclick='cancelFormHandler()'>Cancel</button>
    </div>
    `;

    form.innerHTML = formElem;
    
}



const submitFormHandler = (id) => {
    event.preventDefault();
    const inputFields = document.getElementsByClassName("input_fields");
    state.xmlDocObj.getElementsByTagName("donor_name")[id].childNodes[0].nodeValue = inputFields[0].value;
    state.xmlDocObj.getElementsByTagName("donate_id")[id].childNodes[0].nodeValue = inputFields[1].value;
    state.xmlDocObj.getElementsByTagName("blood_grp")[id].childNodes[0].nodeValue = inputFields[2].value;
    state.xmlDocObj.getElementsByTagName("donate_date")[id].childNodes[0].nodeValue = inputFields[3].value;
    state.xmlDocObj.getElementsByTagName("quantity")[id].childNodes[0].nodeValue = inputFields[4].value;
    state.xmlDocObj.getElementsByTagName("address")[id].childNodes[0].nodeValue = inputFields[5].value;
    state.xmlDocObj.getElementsByTagName("contact_no")[id].childNodes[0].nodeValue = inputFields[6].value;
    console.log(inputFields[0].value)
    showTable(state.xmlDocObj)
    cancelFormHandler();
}

const cancelFormHandler = () => {
    event.preventDefault();
    document.getElementById("form_cont").classList.toggle('hide');

}

const addNewFormHandler = () => {
    event.preventDefault();
    document.getElementById("form_cont").classList.toggle('hide');
    document.getElementById("form_heading").innerHTML = "Add new node"
    const form = document.getElementById("changeForm");
    let formElem = `
    <input class='input_fields' type='text' placeholder='donor_name' value=''/>
    <input class='input_fields' type='text' placeholder='donate_id' value=''/>
    <input class='input_fields' type='text' placeholder='blood_grp' value=''/>
    <input class='input_fields' type='text' placeholder='donate_date' value=''/>
    <input class='input_fields' type='text' placeholder='quantity' value=''/>
    <input class='input_fields' type='text' placeholder='address' value=''/>
    <input class='input_fields' type='text' placeholder='contact_no' value=''/>
    <div class='btn_cont'>
        <button class='submit_btn' type='submit' onclick='addNewNodeHandler()'>Submit</button>
        <button class='cancel_btn' onclick='cancelFormHandler()'>Cancel</button>
    </div>
    `;

    form.innerHTML = formElem;
}

const addNewNodeHandler = () => {
    event.preventDefault();
    const inputFields = document.getElementsByClassName("input_fields");
    const newnode = state.xmlDocObj.createElement("donor")
    state.nodes.map((el,i) => {
        let newTitle = state.xmlDocObj.createElement(el)
        let newText = state.xmlDocObj.createTextNode(inputFields[i].value)
        newTitle.appendChild(newText)
        newnode.appendChild(newTitle);
    });

    state.xmlDocObj.documentElement.insertBefore(newnode,null)
    showTable(state.xmlDocObj)
    cancelFormHandler()
}

loadXml();



