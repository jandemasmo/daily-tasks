import "./SingleTask.css"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function SingleTask() {
    return (
        <div>
            <Header />
            <div className="content">
                <div className="add--task">
                    <a href="http://127.0.0.1:5501/_frontend/addtask.html">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.3125 8.59375H13.2812V1.5625C13.2812 0.699707 12.5815 0 11.7188 0H10.1562C9.29346 0 8.59375 0.699707 8.59375 1.5625V8.59375H1.5625C0.699707 8.59375 0 9.29346 0 10.1562V11.7188C0 12.5815 0.699707 13.2812 1.5625 13.2812H8.59375V20.3125C8.59375 21.1753 9.29346 21.875 10.1562 21.875H11.7188C12.5815 21.875 13.2812 21.1753 13.2812 20.3125V13.2812H20.3125C21.1753 13.2812 21.875 12.5815 21.875 11.7188V10.1562C21.875 9.29346 21.1753 8.59375 20.3125 8.59375Z"
                                fill="#C10FFF" />
                        </svg>
                    </a>
                </div>
                <div className="tasks--list">

                    <div className="task--card">
                        <div className="task--content">
                            <h2 className="header--title">Essa é a primeira nota de teste</h2>
                            <span className="text">
                                Lorem Ipsum has been
                                the industry's standard dummy text ever.
                                Is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever.
                                Is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever.
                                Is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever.
                                Is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever.
                                Is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever.
                                Is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever.
                            </span>
                            <div className="group--button">
                                <a className="button--edit">
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.4857 3.22568L14.915 7.65495L5.29704 17.2729L1.348 17.7088C0.819335 17.7673 0.372672 17.3203 0.431489 16.7916L0.870887 12.8398L10.4857 3.22568ZM17.6545 2.56624L15.5748 0.486538C14.9261 -0.162179 13.8739 -0.162179 13.2252 0.486538L11.2687 2.44307L15.698 6.87233L17.6545 4.9158C18.3032 4.26674 18.3032 3.21495 17.6545 2.56624Z"
                                            fill="white" />
                                    </svg>

                                </a>
                                <a className="button--trash">
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.91067 19.4345C1.91067 19.9594 2.11921 20.4629 2.49042 20.8341C2.86163 21.2053 3.3651 21.4139 3.89007 21.4139H15.7665C16.2914 21.4139 16.7949 21.2053 17.1661 20.8341C17.5373 20.4629 17.7459 19.9594 17.7459 19.4345V5.57864H1.91067V19.4345ZM13.1273 8.87764C13.1273 8.70265 13.1968 8.53483 13.3205 8.41109C13.4443 8.28736 13.6121 8.21784 13.7871 8.21784C13.9621 8.21784 14.1299 8.28736 14.2536 8.41109C14.3774 8.53483 14.4469 8.70265 14.4469 8.87764V18.1148C14.4469 18.2898 14.3774 18.4577 14.2536 18.5814C14.1299 18.7051 13.9621 18.7746 13.7871 18.7746C13.6121 18.7746 13.4443 18.7051 13.3205 18.5814C13.1968 18.4577 13.1273 18.2898 13.1273 18.1148V8.87764ZM9.16847 8.87764C9.16847 8.70265 9.23798 8.53483 9.36172 8.41109C9.48546 8.28736 9.65328 8.21784 9.82827 8.21784C10.0033 8.21784 10.1711 8.28736 10.2948 8.41109C10.4186 8.53483 10.4881 8.70265 10.4881 8.87764V18.1148C10.4881 18.2898 10.4186 18.4577 10.2948 18.5814C10.1711 18.7051 10.0033 18.7746 9.82827 18.7746C9.65328 18.7746 9.48546 18.7051 9.36172 18.5814C9.23798 18.4577 9.16847 18.2898 9.16847 18.1148V8.87764ZM5.20967 8.87764C5.20967 8.70265 5.27918 8.53483 5.40292 8.41109C5.52665 8.28736 5.69448 8.21784 5.86947 8.21784C6.04446 8.21784 6.21228 8.28736 6.33602 8.41109C6.45975 8.53483 6.52927 8.70265 6.52927 8.87764V18.1148C6.52927 18.2898 6.45975 18.4577 6.33602 18.5814C6.21228 18.7051 6.04446 18.7746 5.86947 18.7746C5.69448 18.7746 5.52665 18.7051 5.40292 18.5814C5.27918 18.4577 5.20967 18.2898 5.20967 18.1148V8.87764ZM18.4057 1.61984H13.4572L13.0695 0.848698C12.9874 0.683836 12.8609 0.545158 12.7043 0.448265C12.5477 0.351371 12.3671 0.300107 12.1829 0.300239H7.46948C7.28572 0.299533 7.10548 0.350606 6.9494 0.447607C6.79332 0.544608 6.66773 0.683614 6.587 0.848698L6.19937 1.61984H1.25086C1.07587 1.61984 0.908052 1.68935 0.784316 1.81309C0.660579 1.93683 0.591064 2.10465 0.591064 2.27964L0.591064 3.59924C0.591064 3.77423 0.660579 3.94205 0.784316 4.06579C0.908052 4.18953 1.07587 4.25904 1.25086 4.25904H18.4057C18.5807 4.25904 18.7485 4.18953 18.8722 4.06579C18.996 3.94205 19.0655 3.77423 19.0655 3.59924V2.27964C19.0655 2.10465 18.996 1.93683 18.8722 1.81309C18.7485 1.68935 18.5807 1.61984 18.4057 1.61984Z"
                                            fill="#C10FFF" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}