import Image from "next/image";
import imageUrl from "@/utils/imageUrl";

type SubscriptionFormProps = {
  cfd: any
}

export default function SubscriptionForm(props: SubscriptionFormProps) {
  const {cfd} = props
  const duration = ["1h", "1,5h", "2"]
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const hours = []
  for (let i = 6; i <= 11; i++) {
    hours.push(`${i}am`)
  }
  hours.push(`12pm`)
  for (let i = 1; i <= 10; i++) {
    hours.push(`${i}pm`)
  }

  const terms = ["6 Months", "12 Months"]

  return (
    <div className="subscription-form">
      <div className="image">
        <Image src={imageUrl(cfd.fields.image.fields.file.url)} fill={true} alt=""/>
      </div>
      <div className="text">
        <div className="inner">
          <h2>{cfd.fields.title}</h2>
          <form>
            <label>Duration</label>
            <select name="duration">
              {duration.map((duration, index) => (
                <option key={index} value={duration}>{duration}</option>
              ))}
            </select>
            <label>Day</label>
            <select name="day">
              {days.map((day, index) => (
                <option key={index} value={day}>{day}</option>
              ))}
            </select>
            <label>Starting time:</label>
            <select name="starting-time">
              {hours.map((hour, index) => (
                <option key={index} value={hour}>{hour}</option>
              ))}
            </select>
            <label>Term:</label>
            <select name="starting-time">
              {terms.map((term, index) => (
                <option key={index} value={term}>{term}</option>
              ))}
              </select>
            <label>Message:</label>
            <textarea name="message"></textarea>
            <div>
              <button type="submit">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
