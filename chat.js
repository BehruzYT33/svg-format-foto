// Функция для отображения модального окна с оригинальным дизайном
function showModal() {
    // Проверяем, не открыто ли уже окно
    if (document.querySelector('.PsDMW.W0ZCt')) {
        return;
    }

    // Создаем затемненный фон (оверлей)
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    // Оригинальный HTML модального окна (как у вас)
    const modalHTML = `
        <div class="PsDMW W0ZCt" style="position: relative; max-width: 400px; width: 90%; margin: 20px;">
            <div class="iuLiH">
                <div class="VCgBQ"></div>
                <div class="yW6Ua">
                    <div class="H7gR9 GLmqX" style="cursor: pointer;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10">
                            <g><g transform="rotate(-225 5.2 2.8)"><path fill="none" stroke="#92cbde" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="20" stroke-width="2" d="M2.588-1.53v0h5.809v5.88"></path></g></g>
                        </svg>
                    </div>
                    <div class="JxgOX"></div>
                    <div class="vwiAy">Чат BEHRUZJOURNAL</div>
                    <div class="ziTlw">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 10">
                            <g><g transform="rotate(-315 5 5)"><path fill="#a9e3fc" d="M4 0a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2H6v4a1 1 0 0 1-2 0V6H0a1 1 0 0 1 0-2h4z"></path></g></g>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="ukfNh">
                <div class="s4nfI">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.82485 13L12.7123 17.8875C13.1048 18.28 13.102 18.9172 12.706 19.3062C12.315 19.6904 11.6874 19.6876 11.2998 19.3L4.70696 12.7071C4.31643 12.3166 4.31643 11.6834 4.70696 11.2929L11.2998 4.70002C11.6874 4.31241 12.315 4.30964 12.706 4.6938C13.102 5.08281 13.1048 5.72003 12.7123 6.11252L7.82485 11H18.9998C19.5521 11 19.9998 11.4477 19.9998 12C19.9998 12.5523 19.5521 13 18.9998 13H7.82485Z" fill="#2C2C2C"></path>
                    </svg>
                </div>
                <div class="E46K0">
                    <div class="Jy41J">
                        <div class="ElHRR">
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40 21.6667C41.841 21.6667 43.3333 23.159 43.3333 25V43.3333C43.3333 45.1743 41.841 46.6667 40 46.6667C38.159 46.6667 36.6667 45.1743 36.6667 43.3333V25C36.6667 23.159 38.159 21.6667 40 21.6667Z" fill="#D0021B"></path>
                                <path d="M40 59.1667C42.3012 59.1667 44.1667 57.3012 44.1667 55C44.1667 52.6988 42.3012 50.8333 40 50.8333C37.6988 50.8333 35.8333 52.6988 35.8333 55C35.8333 57.3012 37.6988 59.1667 40 59.1667Z" fill="#D0021B"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4413 63.5655C19.2381 66.3624 22.3719 69.0712 24.3957 70.7624C25.7859 71.9241 27.488 72.6295 29.2925 72.7914C31.9194 73.0271 36.0509 73.3284 40.0064 73.3284C43.9633 73.3284 48.0964 73.0269 50.7232 72.7911C52.5258 72.6293 54.2264 71.9252 55.6157 70.7652C57.6406 69.0746 60.7776 66.3652 63.5758 63.567C66.3734 60.7694 69.082 57.6342 70.7725 55.61C71.933 54.2205 72.6375 52.5194 72.7993 50.7162C73.0351 48.0893 73.3366 43.9568 73.3366 40.0003C73.3366 36.0437 73.0351 31.911 72.7993 29.2842C72.6375 27.4811 71.9331 25.7801 70.7727 24.3906C69.0821 22.3662 66.373 19.2302 63.5752 16.4324C60.7773 13.6345 57.641 10.9255 55.6164 9.23498C54.2271 8.07488 52.5263 7.37064 50.7236 7.20884C48.0967 6.97307 43.9638 6.67154 40.007 6.67154C36.0513 6.67154 31.9195 6.9729 29.2926 7.20864C27.4885 7.37054 25.7865 8.07571 24.3965 9.23717C22.373 10.928 19.2396 13.6361 16.4427 16.433C13.6454 19.2303 10.9363 22.3651 9.2451 24.3893C8.08378 25.7793 7.3787 27.4811 7.2168 29.2851C6.98106 31.912 6.67969 36.0439 6.67969 39.9997C6.67969 43.9557 6.9811 48.0878 7.21684 50.7147C7.37872 52.5185 8.08361 54.22 9.24466 55.6098C10.9354 57.6338 13.644 60.7683 16.4413 63.5655ZM51.343 65.6477C50.9958 65.9376 50.578 66.1107 50.1272 66.1511C47.5816 66.3796 43.674 66.6618 40.0064 66.6618C36.3401 66.6618 32.434 66.3798 29.8883 66.1514C29.4371 66.1109 29.0186 65.9375 28.6707 65.6468C26.7094 64.0078 23.7482 61.4444 21.1553 58.8515C18.5624 56.2586 15.9994 53.2971 14.3609 51.3357C14.0706 50.9881 13.8973 50.5699 13.8568 50.1188C13.6284 47.5732 13.3464 43.6665 13.3464 39.9997C13.3464 36.3331 13.6283 32.4266 13.8568 29.881C13.8973 29.4299 14.0706 29.0115 14.3611 28.6637C16.0001 26.7021 18.5637 23.7401 21.1568 21.147C23.7495 18.5543 26.7102 15.9915 28.6712 14.353C29.0189 14.0624 29.4373 13.8891 29.8885 13.8486C32.4341 13.6202 36.3405 13.3382 40.007 13.3382C43.6745 13.3382 47.582 13.6203 50.1276 13.8488C50.5784 13.8893 50.9963 14.0624 51.3435 14.3523C53.3054 15.9904 56.2682 18.5534 58.8612 21.1465C61.4542 23.7395 64.0174 26.7021 65.6557 28.6639C65.9458 29.0112 66.1189 29.4292 66.1594 29.8801C66.3878 32.4257 66.6699 36.333 66.6699 40.0003C66.6699 43.6675 66.3878 47.5747 66.1594 50.1203C66.1189 50.5712 65.9458 50.9892 65.6556 51.3366C64.0175 53.2981 61.4547 56.26 58.8618 58.8529C56.2687 61.4461 53.3052 64.0095 51.343 65.6477Z" fill="#D0021B"></path>
                            </svg>
                            <p class="VmLVv">В вашей школе чаты пока не подключены. </p>
                            <p class="ncFP7">Обратитесь за помощью к службе поддержки. .</p>
                        </div>
                    </div>
                    <div class="TxYVJ">
                        <div class="w_KPv">
                            <div class="b6poy"></div>
                            <p class="HT6X4">Нравятся чаты?</p>
                        </div>
                        <a class="vch_e" href="https://forms.yandex.ru/cloud/68af17135056900cbadd520f?userid=562544" target="_blank" rel="noopener noreferrer">
                            <span>Поделиться мнением</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                                <path d="M0.949747 1.05025C1.34027 0.659728 1.97344 0.659728 2.36396 1.05025L6.6066 5.29289C6.97265 5.65895 6.99583 6.23838 6.67565 6.63115L6.6066 6.70711L2.36396 10.9497C1.97344 11.3403 1.34027 11.3403 0.949747 10.9497C0.559223 10.5592 0.559223 9.92606 0.949747 9.53553L4.48528 6L0.949747 2.46447C0.559223 2.07394 0.559223 1.44078 0.949747 1.05025Z" fill="#007AFF"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    overlay.innerHTML = modalHTML;
    document.body.appendChild(overlay);

    const modal = overlay.querySelector('.PsDMW.W0ZCt');

    // Закрытие по клику на крестик (стрелка назад)
    const closeBtn = modal.querySelector('.H7gR9.GLmqX');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => overlay.remove());
    }

    // Закрытие по клику на фон
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.remove();
        }
    });

    // Закрытие по ESC
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            overlay.remove();
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

// Находим элемент для клика (текст "Чаты BEHRUZJOURNAL")
function findClickableElement() {
    // Ищем по точному совпадению текста
    const elements = document.querySelectorAll('div, span, p, h1, h2, h3, a, button');
    for (let el of elements) {
        const text = el.textContent.trim();
        if (text === 'Чаты BEHRUZJOURNAL' || text.includes('Чаты BEHRUZJOURNAL')) {
            return el;
        }
    }
    return null;
}

const targetElement = findClickableElement();

if (targetElement) {
    console.log('✅ Найден элемент для клика:', targetElement);
    targetElement.style.cursor = 'pointer';
    targetElement.addEventListener('click', (e) => {
        e.stopPropagation();
        showModal();
    });
    
    // Визуальный эффект при наведении
    targetElement.addEventListener('mouseenter', () => {
        targetElement.style.opacity = '0.7';
    });
    targetElement.addEventListener('mouseleave', () => {
        targetElement.style.opacity = '1';
    });
} else {
    console.error('❌ Элемент "Чаты BEHRUZJOURNAL" не найден');
    // Выводим все тексты на странице для отладки
    console.log('Тексты на странице:');
    document.querySelectorAll('div, span, p').forEach(el => {
        if (el.textContent.trim()) {
            console.log('-', el.textContent.trim());
        }
    });
}
