import "./AddAndEdit.css"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

export function AddAndEdit() {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="add--task">
                    <a>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3125 8.59375H13.2812V1.5625C13.2812 0.699707 12.5815 0 11.7188 0H10.1562C9.29346 0 8.59375 0.699707 8.59375 1.5625V8.59375H1.5625C0.699707 8.59375 0 9.29346 0 10.1562V11.7188C0 12.5815 0.699707 13.2812 1.5625 13.2812H8.59375V20.3125C8.59375 21.1753 9.29346 21.875 10.1562 21.875H11.7188C12.5815 21.875 13.2812 21.1753 13.2812 20.3125V13.2812H20.3125C21.1753 13.2812 21.875 12.5815 21.875 11.7188V10.1562C21.875 9.29346 21.1753 8.59375 20.3125 8.59375Z" fill="#C10FFF" />
                        </svg>

                    </a>
                </div>
                <form action="#" method="post" className="form_add_end_edit" id="addAndEdit">
                    <input type="text" placeholder="title" name="title" id="title" />
                    <textarea name="bory_task" id="" cols="30" rows="20"></textarea>
                    <button className="button-default button_form_edit" >Adicionar</button>
                    <div id="box_message"></div>
                </form>
            </div>
            <Footer />
        </div>
    )
}