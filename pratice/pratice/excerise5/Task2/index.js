let arr = [
  "Rashmin Chhatrala",
  "Ashish Shah",
  "Yash Dubey",
  "Prakash Jain",
  "Yashraj Singh",
  "Viraj Sinha",
  "Rajesh Kumar",
  "Mahesh Marwadi",
  "Suresh Sahni",
  "Amar Vilas",
  "Virdas  Singhania",
  "Rajeshwari Bindra",
  "Birendra Bhalerao",
  "Virendra Bhupati",
  "Bhupendra Singh",
  "Bhuvam Bam",
  "Shri Raj",
  "Prashant Kamle",
  "Kamlesh Tomar",
  "Risabh Khare",
  "Rishi Kohli",
  "Kunwar Kharwanda",
  "Kartik Koli",
  "Komal Jain",
  "Kartikey Pandey"
];

let input = document.getElementById('inputBox');
let nameList = document.getElementById('nameList');


function filterNames() {

  const searchTerm = input.value.toLowerCase().trim();


  nameList.innerHTML = '';

  if (searchTerm.length >= 2) {

    arr.forEach(name => {
      const fullName = name.toLowerCase();
      const index = fullName.indexOf(searchTerm);

      if (index !== -1) {

        const highlightedName = name.substring(0, index)+
        `<span class="highlight">${name.substring(index, index + searchTerm.length)}</span>` +
          name.substring(index + searchTerm.length);
        


        const li = document.createElement('li');
        li.classList.add('name-item');
        li.innerHTML = highlightedName;
        nameList.appendChild(li);

      }
    });
  }
}


input.addEventListener("input", filterNames);