import Vue from 'vue'


export async function fetchTodos({commit}) {
    try {
        /*     const response = await Vue.axios({
                url: '/todos'
            })
            const payload = response && response.data */

        //es lo mismo que arriba pero desestructurado

        // { data } = payload.data

        const { data } = await Vue.axios({
            url: '/todos'
        })
        // commit('setTodos', data) esto es igual a lo de abajo
        commit('todos/setTodos', data, {root: true})

    } catch (error) {
        commit('todos/todosError', e.message, {root: true})
    } finally{
        console.log ('Petición para obtener los todos finalizada')
    }
}

export async function addTodo({commit,dispatch}, todo) {
    try {
        await Vue.axios({
            method: 'POST',
            url: '/todos',
            data: {
                id: Date.now(),
                text: todo.text,
                done: false
            }
        })
        // commit('setTodos', data) esto es igual a lo de abajo


    } catch (error) {
        commit('todos/todosError', e.message, {root: true})
    } finally{
        console.log ('Petición para crear un todo finalizada')
    }
}

export async function updateTodo({commit}, todo) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/todos/{$todo.id}`,
            data: {
                id: todo.id,
                text: todo.text,
                done: todo.done
            }
        })


    } catch (error) {
        commit('todos/todosError', e.message, {root: true})
    } finally{
        console.log ('Petición para actualizar un todo finalizada')
    }
}

export async function updateTodoStatus({commit}, todo) {
    try {
        await Vue.axios({
            method: 'PUT',
            url: `/todos/{$todo.id}`,
            data: {
                id: todo.id,
                text: todo.text,
                done: !todo.done
            }
        })



    } catch (error) {
        commit('todos/todosError', e.message, {root: true})
    } finally{
        console.log ('Petición para actualizar el estado de  un todo finalizada')
    }
}


export async function removeTodo({commit,dispatch}, todo) {
    try {
        await Vue.axios({
            method: 'DELETE',
            url: `/todos/{$todo.id}`,

        })

        dispatch('fetchTodos')

    } catch (error) {
        commit('todos/todosError', e.message, {root: true})
    } finally{
        console.log ('Petición para actualizar el estado de  un todo finalizada')
    }
}