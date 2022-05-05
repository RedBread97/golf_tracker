const newFormHandler = async (event) => {
    event.preventDefault();

    const date = document.querySelector('#date').value.trim();
    const courseName = document.querySelector('#coursename').value.trim();
    const roundScore = document.querySelector('#score').value.trim();
    const notes = document.querySelector('#notes').value.trim();

    if (date && courseName && roundScore && notes) {
        console.log(courseName);
        // console.log(date && courseName && roundScore && notes);
        const res = await fetch(`/api/scorecard`, {
            method: 'POST',
            body: JSON.stringify({date, courseName, roundScore, notes}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(res)
        if (res.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create score');
        }
    }
};

document.querySelector('.new-scorecard-form').addEventListener('submit', newFormHandler);
// const getDatePickerTitle = elem => {
//     const label = elem.nextElementSibling;
//     let titleText = '';
//     if (label && label.tagName === 'LABEL') {
//       titleText = label.textContent;
//     } else {
//       titleText = elem.getAttribute('aria-label') || '';
//     }
//     return titleText;
//   }
  
//   const elems = document.querySelectorAll('.datepicker_input');
//   for (const elem of elems) {
//     const datepicker = new Datepicker(elem, {
//       'format': 'mm/dd/yyyy',
//       title: getDatePickerTitle(elem)
//     });
//   }     

// document.querySelector('.new-scorecard-form').addEventListener('submit', newFormHandler);
