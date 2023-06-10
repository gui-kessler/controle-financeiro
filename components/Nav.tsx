export function Nav() {
    return (
        <div style="background: deepskyblue; overflow: hidden; text-decoration: none; color: #fff;">
            <div style="display: grid; grid-template-columns: 6fr 6fr; align-items: right; width: 100%;">
                <img src="../static/logo.svg" alt="Controle Financeiro" style="font-size: 40px; font-weight: bold;"/>
                <ul style="list-style: none; display: flex; font-size: 30px; font-weight: bold; margin: 0px;">
                    <li style="padding: 5px 20px 10px 30px"><a href="/">Dashboard</a></li>
                    <li style="padding: 5px 20px 10px 30px"><a href="/contas">Contas</a></li>
                    <li style="padding: 5px 20px 10px 30px"><a href="/profile">Profile</a></li>
                    <li style="padding: 5px 20px 10px 30px"><a href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    )
}