const newFormHandler = async (event) => {
    event.preventDefault();

    const date = document.querySelector('#date').value.trim();
    const course_name = document.querySelector('#coursename').value.trim();
    const round_score = document.querySelector('#score').value.trim();
    const notes = document.querySelector('#notes').value.trim();

    if (date && course_name && round_score && notes) {
        const res = await fetch(`/api/scorecard`, {
            method: 'POST',
            body: JSON.stringify({date, course_name, round_score, notes}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // if (response.ok) {
        //     document.location.replace('/homepage');
        // } else {
        //     alert('Failed to create score');
        // }
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

document.querySelector('.new-scorecard-form').addEventListener('submit', newFormHandler);
