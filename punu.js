const cards = {
    data: [
      {
        name: 'Mixmax',
        budget_name: 'Software subscription',
        owner_id: 1,
        spent: {
          value: 100,
          currency: 'SGD'
        },
        available_to_spend: {
          value: 1000,
          currency: 'SGD'
        },
        card_type: 'burner',
        expiry: '9 Feb',
        limit: 100,
        status: 'active'
      },
      {
        name: 'Quickbooks',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: {
          value: 50,
          currency: 'SGD'
        },
        available_to_spend: {
          value: 250,
          currency: 'SGD'
        },
        card_type: 'subscription',
        limit: 10,
        status: 'active'
      }
    ]
  };
  
  const renderCards = (cardsData) => {
    const cardList = document.getElementById('card-list');
    cardList.innerHTML = '';
  
    cardsData.forEach((card) => {
      const cardType = card.card_type === 'burner' ? 'Burner' : 'Subscription';
      const cardExpiration = card.card_type === 'burner' ? `Expiry: ${card.expiry}` : `Limit: ${card.limit}`;
  
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.innerHTML = `
        <div class="card-header">${cardType}</div>
        <div class="card-body">
          <h5 class="card-title">${card.name}</h5>
          <p class="card-text">${card.budget_name}</p>
          <p class="card-text">Spent: ${card.spent.value} ${card.spent.currency}</p>
          <p class="card-text">Available to spend: ${card.available_to_spend.value} ${card.available_to_spend.currency}</p>
          <p class="card-text">${cardExpiration}</p>
          <p class="card-text">Status: ${card.status}</p>
        </div>
      `;
  
      cardList.appendChild(cardElement);
    });
  };
  
  document.getElementById('your-cards-tab').addEventListener('click', () => {
    const yourCards = cards.data.filter((card) => card.owner_id === 1);
    renderCards(yourCards);
  });
  
  document.getElementById('all-cards-tab').addEventListener('click', () => {
    renderCards(cards.data);
  });
  
  document.getElementById('blocked-cards-tab').addEventListener('click', () => {
    const blockedCards = cards.data.filter((card) => card.status === 'blocked');
    renderCards(blockedCards);
  });
  
  // Initial rendering
  renderCards(cards.data);
  