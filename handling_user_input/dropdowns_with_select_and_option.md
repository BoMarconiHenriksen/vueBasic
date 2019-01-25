# Handling dropdowns with select and option
Brug vuejs til at hente værdien, og populate dropdown menuen.  
Hvis du vil have en default value i din dropdown: ```:selected="priority == 'Medium'"```  
Det er også muligt at vælge default i data objektet som i de forgående.  
Når du binder med v-model skal det bruges på select taget.   
```
<div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
        <label for="priority">Priority</label>
        <select
            id="priority"
            class="form-control"
            v-model="selectedProperty">
                <option 
                    v-for="priority in priorities" 
                    :selected="priority == 'Medium'">{{ priority }}</option> <!-- Default overskrives af default i data objektet. -->
        </select>
    </div>
</div>

<p>Priority: {{ selectedProperty }}</p> 

export default {
    data() {
        return {
            userData: {
                email: '',
                password: '',
                age: 27
            },
            priorities: ['High', 'Medium', 'Low'], /* Dropdown valgmulighederne. */
            selectedProperty: 'High', /* Property til dropdown */
            }
        }
    }
```
