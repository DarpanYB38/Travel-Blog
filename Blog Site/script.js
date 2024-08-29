        function convertCurrency() {
            var amount = document.getElementById("amount").value;
            var currency = document.getElementById("currency").value;
            var conversionRate = 0;
            var result = "";

            switch(currency) {
                case "euro":
                    conversionRate = 0.011; // Example conversion rate from INR to Euro
                    result = "€" + (amount * conversionRate).toFixed(2);
                    break;
                case "usd":
                    conversionRate = 0.012; // Example conversion rate from INR to USD
                    result = "$" + (amount * conversionRate).toFixed(2);
                    break;
                case "aud":
                    conversionRate = 0.017; // Example conversion rate from INR to AUD
                    result = "AUD " + (amount * conversionRate).toFixed(2);
                    break;
                case "jpy":
                    conversionRate = 1.53; // Example conversion rate from INR to JPY
                    result = "¥" + (amount * conversionRate).toFixed(2);
                    break;
                case "gbp":
                    conversionRate = 0.0096; // Example conversion rate from INR to GBP
                    result = "£" + (amount * conversionRate).toFixed(2);
                    break;
                default:
                    result = "Invalid currency selected";
            }

            document.getElementById("conversion-result").innerText = result;
        }